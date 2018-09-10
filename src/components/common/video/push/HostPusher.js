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

  initHostPusher (successBK = null, failedBK = null) {
    let VhallInteraction = window.VhallInteraction
    let VhallSDK = window.Vhall

    VhallSDK.ready(() => {
      this.interactor = new VhallInteraction({
        inavId: this.inavId,
        videoNode: this.rootEleId,
        success: result => {
          successBK && successBK(result)
        },
        fail: reason => {
          failedBK && failedBK(reason)
        }
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
  startBroadCast (successBK = null, failedBK = null) {
    this.interactor.startBroadCast({
      roomId: this.roomId,
      success: () => successBK && successBK(),
      fail: reason => failedBK && failedBK(reason)
    })
  }

  /**
   * 取消推旁路
   *
   * @param {*} [successBK=null]
   * @param {*} [failedBK=null]
   * @memberof HostPusher
   */
  stopBroadCast (successBK = null, failedBK = null) {
    this.interactor.stopBroadCast({
      roomId: this.roomId,
      success: () => successBK && successBK(),
      fail: reason => failedBK && failedBK(reason)
    })
  }
}
