import NormalRenderer from './NormalRenderer'

/**
 * 弹幕管理类
 *
 * @export
 * @class Barrage
 * @author zhenliang.sun
 * @date 2018-08-11 14:12:38
 */

const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
// 私有函数内部循环
const loop = Symbol('barrage-loop')

export default class Barrage {
  constructor () {
    // 把注册进来的弹幕弹层挂载到windows.barrages下面
    window.barrages = []
    // 帧率显示
    this._fps = 0
    this.renderers = []
    this.running = false
    this[loop]()
  }

  [loop] (elapsed = new Date().getTime()) {
    let now = new Date().getTime()
    if (!this.running) {
      this.renderers.forEach(renderer => {
        let r = renderer.renderer
        r.clearRect()
      })
      return
    }
    let elapsedTime = now - elapsed
    let w = this.width
    let h = this.height
    this.renderers.forEach(renderer => {
      let r = renderer.renderer
      r.update(w, h, elapsedTime)
    })
    this._fps = 1000 / elapsedTime >> 0
    requestAnimationFrame(() => this[loop](now))
  }

  /**
   * 注册渲染器
   *
   * @memberof Barrage
   */
  registRenderer (type, canvas, opt = {}) {
    let r

    this.width = canvas.clientWidth
    this.height = canvas.clientHeight

    switch (type) {
      case 'normal':
        r = new NormalRenderer(canvas, opt)
        break
      default:
        break
    }

    if (r === null) {
      return
    }

    let renderer = {
      id: type + Math.random() * 100 >> 0,
      type: type,
      renderer: r
    }
    window.barrages.push(canvas)
    this.renderers.push(renderer)
  }

  /**
   *
   *
   * @param {*} content
   * @param {string} [type="normal"]
   * @param {*} [opts={}]
   * @memberof Barrage
   */
  add (content, type = 'normal', opts = {}) {
    this.renderers.forEach(renderer => {
      if (renderer.type === type) {
        let r = renderer.renderer
        r.add(content, opts)
      }
    })
  }

  /**
   *
   * 整体开始
   * @returns
   * @memberof Barrage
   */
  start () {
    if (this.running) {
      return
    }

    this.running = true
    console.log('[barrage] start')
    this[loop]()
  }

  /**
   *
   * 整体停止
   * @memberof Barrage
   */
  stop () {
    this.running = false
    console.log('[barrage] stop')
  }

  /**
   *
   * 整体暂停
   * @memberof Barrage
   */
  pause () {
    this.renderers.forEach(renderer => {
      let r = renderer.renderer
      r.pause()
    })
    console.log('[barrage] pause')
  }

  /**
   *
   * 整体恢复
   * @memberof Barrage
   */
  resume () {
    this.renderers.forEach(renderer => {
      let r = renderer.renderer
      r.resume()
    })
    console.log('[barrage] resume')
  }

  destroy () {
    this.renderers.forEach(renderer => {
      let r = renderer.renderer
      r.clearRect()
      r.destroy()
    })

    this.renderers = []
    this.running = false
    this._fps = 0
    console.log('[barrage] destroy')
  }

  /**
   *
   * 获取当前弹幕的fps
   * @readonly
   * @memberof Barrage
   */
  get fps () {
    return this._fps
  }
}
