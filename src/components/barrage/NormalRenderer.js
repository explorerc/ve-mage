import BaseRenderer from './BaseRenderer'

/**
 * 基础文本渲染器
 *      用于渲染纯文字
 * @export
 * @class NormalRenderer
 * @extends {BaseRenderer}
 * @author zhenliang.sun
 */
export default class NormalRenderer extends BaseRenderer {
  constructor (cvs, opt = {}) {
    super(cvs, opt)
    this.type = 'NORMAL-RENDERER'
    this.itemPool = []
    this.tweenType = opt.tweenType || 'quad'
    this.tweenMethod = opt.tweenMethod || this.tween.Linear
    this.duration = opt.duration || 5000
    this.offsetYPercent = opt.offsetYPercent || 0.1
    this.fillPercent = opt.fillPercent || 0.8
    this.changeStyle(opt)
    this._calcRow()
  }

  changeStyle (opts = {}) {
    // 文本属性保存
    this.globalHeight = opts.fontSize || this.globalHeight || 18
    this.globalFamily = opts.fontFamily || this.globalFamily || 'Microsoft YaHei'
    this.globalStyle = opts.fontColor || this.globalStyle || '#ffffff'
    this.opacity = opts.opacity || this.opacity || 1
    this.gap = opts.gap || this.gap || 3
    this.globalChanged = true
  }

  update (w, h, t) {
    super.update(w, h, t)

    this.globalChanged && this.initStyle()
    // 暂停状态不进行任何渲染
    if (this._pause) {
      return
    }

    this.ctx.clearRect(0, 0, w, h)
    this.ctx.save()

    // fill text
    let len = this.data.length
    for (let i = 0; i < len; i++) {
      let item = this.data[i]
      if (!item) {
        continue
      }
      // 更新item数据
      item.elapsedTime += t
      // elapsedTime,start,dist,duration
      item.x = this.tween[this.tweenType](this.tweenMethod, item.elapsedTime, w, -item.width - w, item.duration)
      this.ctx.fillStyle = item.fillStyle
      // 边界检查、回收
      if (item.x < -item.width) {
        this._recycle(item)
        this.data.splice(i, 1)
        len--
        continue
      }
      // 绘制
      this.ctx.fillText(item.data, item.x, item.y)
    }

    this.ctx.restore()
  }

  initStyle () {
    super.initStyle()
    this.globalChanged = false
    // 合并font属性
    this._mergeFont()

    // 更新全局样式
    this.ctx.font = this.globalFont
    this.ctx.textBaseline = 'middle'
    this.ctx.fillStyle = this.globalColor
    this.ctx.globalAlpha = this.opacity
  }

  add (content, opts) {
    super.add(content, opts)
    let itemData = this.itemPool.length > 0 ? this.itemPool.shift() : {}
    Object.assign(itemData, opts)
    // 计算宽度
    if (this.ctx) {
      itemData.width = this.ctx.measureText(content).width || 200
    }
    itemData.elapsedTime = 0
    itemData.data = content
    itemData.height = this.globalHeight
    itemData.duration = this.duration - (Math.random() * this.duration / 3) >> 0
    itemData.fillStyle = opts.fillStyle || this.globalStyle
    // 计算轨道
    itemData.y = this._randomRow()
    this._data.push(itemData)
  }

  destroy () {
    super.destory()
    this.itemPool = []
    this._data = []
  }

  _mergeFont () {
    this.globalFont = `${this.globalHeight}px ${this.globalFamily}`
  }

  _recycle (item) {
    item.elapsedTime = 0
    item.width = 0
    item.height = 0
    item.data = ''
    item.x = 0
    item.y = 0
    item.row = -1
    item.duration = 0
    item.fillStyle = ''
    this.itemPool.push(item)
  }

  _calcRow () {
    // this.offsetYPercent // 距离上边距百分比
    // this.height // 当前显示区域的高度
    // this.fillPercent // 填充多少
    // this.gap // 行间距
    // this.globalHeight // 行高
    /*
    ------------------------
    |  | offsetYPercent
    |       ---------------
    |       |
    |       | fillPercent
    |       ---------------
    |
    ----------------------------
    */
    let fillHeight = this.height * this.fillPercent
    this.totalRows = Math.floor(fillHeight / (this.globalHeight + this.gap))
  }

  _randomRow () {
    let rowId = Math.floor(Math.random() * this.totalRows)
    let offsetY = this.height * this.offsetYPercent
    let ypos = rowId * (this.globalHeight + this.gap)
    return offsetY + ypos
  }
}
