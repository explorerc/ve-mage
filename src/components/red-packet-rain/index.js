class Bg {
  constructor (ctx, w, h) {
    this.ctx = ctx
    this.w = w
    this.h = h
    this.live = true
  }
  draw () {
    this.ctx.save()
    this.ctx.fillStyle = 'rgba(0,0,0,0.8)'
    this.ctx.fillRect(0, 0, this.w, this.h)
    this.ctx.restore()
  }
}

class RedPacket {
  constructor (x, limit, ctx, img1, img2) {
    this.ctx = ctx
    this.img1 = img1
    this.img2 = img2
    this.limit = limit
    this.x = x
    this.y = -80
    ;({ width: this.w, height: this.h } = this.img1)
    this.s = Math.round(Math.random() * 5) + 0
    this.live = true
    this.change = 0
  }
  draw () {
    // this.y += this.s
    this.ctx.save()
    if (this.change % 50 === 0) {
      this.x = Math.random() * (1800 - 200) + 50
      this.y = Math.random() * (900 - 200) + 50
    }
    if (this.change % 5 === 0) {
      this.ctx.drawImage(this.img1, this.x, this.y, this.w, this.h)
    } else {
      this.ctx.drawImage(this.img2, this.x, this.y, this.w, this.h)
    }
    this.change += 1
    if (this.y > this.limit) {
      this.live = false
    }
    this.ctx.restore()
  }
  isTouch (x, y) {
    if (
      x > this.x &&
      x < this.x + this.w &&
      y > this.y - this.h / 2 &&
      y < this.y + this.h
    ) {
      this.live = false
    }
  }
}

const defaultOptions = { limit: 2 }
const noop = function () {}
class RedPacketRain {
  prev = 0
  lastTime = 0
  fps = 60
  constructor (options) {
    this._options = Object.assign({}, defaultOptions, options)
    this.init()
  }
  init () {
    this.canvas = this._options.el
    this.timeUpdate = this._options.timeUpdate || noop
    this.timeOver = this._options.timeOver || noop
    this.limit = this._options.limit
    this.ctx = this.canvas.getContext('2d')
    this.w = this.canvas.width = window.innerWidth
    this.h = this.canvas.height = window.innerHeight
    this.img1 = new Image()
    this.img2 = new Image()
    this.sprites = [new Bg(this.ctx, this.w, this.h)]

    this.canvas.addEventListener('click', e => {
      let { pageX: x, pageY: y } = e
      this.sprites.forEach(item => item.isTouch && item.isTouch(x, y))
    })
  }
  clear () {
    this.ctx.clearRect(0, 0, this.w, this.h)
  }
  start () {
    if (this.img1.load) {
      this.work()
    } else {
      this.img1.src = this._options.pack.url1
      this.img2.src = this._options.pack.url2
      this.img1.width = this._options.pack.w
      this.img1.height = this._options.pack.h
      this.img1.addEventListener('load', () => {
        this.img1.load = true
        this.work()
      })
    }
  }
  work () {
    this.clear()
    let x = Math.random() * (this.w - 200) + 50
    if (this.sprites.length - 1 < this.limit) {
      this.sprites.push(
        new RedPacket(x, this.h, this.ctx, this.img1, this.img2)
      )
    }
    this.sprites.forEach(item => {
      item.live && item.draw()
    })
    this.sprites = this.sprites.filter(item => item.live)
    this.timeUpdate({
      counts: this.sprites.length - 1,
      fps: this.getFps()
    })
    window.requestAnimationFrame(this.work.bind(this))
  }
  getFps () {
    let now = Date.now()
    if (now - this.prev > 100) {
      this.fps = 1000 / (now - this.lastTime)
      this.prev = now
    }
    this.lastTime = now
    return this.fps.toFixed(2)
  }
}

export default RedPacketRain
