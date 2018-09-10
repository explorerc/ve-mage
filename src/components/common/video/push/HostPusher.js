import BasePusher from './BasePusher'

/**
 * 推流器，封装PaaS 互动SDK
 *
 * @export
 * @param appId, roomId, inavId, token, rootEleId
 * @class HostPusher extends BasePusher
 * @author zhenliang.sun
 */
export default class HostPusher extends BasePusher {
  constructor (appId, roomId, inavId, token, rootEleId) {
    super(appId, roomId, inavId, token, rootEleId)
    this.type = 'host'
  }

  initHostPusher () {
    let VhallInteraction = window.VhallInteraction
    let VhallSDK = window.Vhall

    return new Promise((resolve, reject) => {
      VhallSDK.ready(() => {
        this.interactor = new VhallInteraction({
          inavId: this.inavId,
          videoNode: this.rootEleId,
          success: result => {
            resolve(result)
          },
          fail: reason => {
            reject(reason)
          }
        })
      })
    })
  }

  set accountId (val) {
    super.accountId = val
    Vhall.config({
      appId: this.appId,
      accountId: this.accountId,
      token: this.token
    })
  }

  /**
   * 开始推旁路
   *
   * @param {*} [successBK=null]
   * @param {*} [failedBK=null]
   * @memberof HostPusher
   */
  startBroadCast () {
    return new Promise((resolve, reject) => {
      this.interactor.startBroadCast({
        roomId: this.roomId,
        success: () => resolve(),
        fail: reason => reject(reason)
      })
    })
  }

  /**
   * 取消推旁路
   *
   * @param {*} [successBK=null]
   * @param {*} [failedBK=null]
   * @memberof HostPusher
   */
  stopBroadCast () {
    return new Promise((resolve, reject) => {
      this.interactor.stopBroadCast({
        roomId: this.roomId,
        success: () => resolve(),
        fail: reason => reject(reason)
      })
    })
  }
}
