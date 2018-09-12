export default class BasePusher {
  constructor (appId, roomId, inavId, token, rootEleId) {
    this.appId = appId
    this.roomId = roomId
    this.inavId = inavId
    this.token = token
    this.rootEleId = rootEleId
    this.type = ''
    this._accountId = null

    // 一个网页里。 既是主持人又是嘉宾？？？  如果存在这种情况的那么这个interactor也需要分角色，分为host 和 guest
    this.interactor = null
  }

  set accountId (val) {
    this._accountId = val
  }

  get accountId () {
    return this._accountId
  }

  /**
   *
   * 获取设备列表
   * @returns
   * @memberof BasePusher
   */
  getDevices () {
    return new Promise((resolve, reject) => {
      if (!this.interactor) {
        reject(new Error('尚未初始化互动推流端'))
      }
      this.interactor.getDevices(d => {
        resolve(d)
      })
    })
  }

  /**
   *
   * 主动上麦
   * @memberof BasePusher
   */
  publish () {
    if (!this.interactor) {
      console.warn('尚未初始化互动推流端')
      return
    }

    this.interactor.publish()
  }

  /**
   *
   * 主动下麦
   * @memberof BasePusher
   */
  unpublish () {
    if (!this.interactor) {
      console.warn('尚未初始化互动推流端')
      return
    }

    this.interactor.unpublish()
  }

  getStreamId () {
    if (!this.interactor) {
      console.warn('尚未初始化互动推流端')
      return
    }
    this.interactor.getStreamId()
  }

  mute (val) {
    if (!this.interactor) {
      console.warn('尚未初始化互动推流端')
      return
    }
    this.interactor.muteAudio(val)
  }

  showVideo (val) {
    if (!this.interactor) {
      console.warn('尚未初始化互动推流端')
      return
    }
    this.interactor.muteVideo(val)
  }

  getSetting () {
    return this.interactor.getSetting()
  }

  changeSetting (val) {
    let conf = this.getSetting()
    Object.assign(conf, val)
    this.interactor.changeSetting({
      conf: conf
    })
  }

  stop () {

  }

  destroy () {

  }
}
