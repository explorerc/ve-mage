import BasePusher from './BasePusher'

export default class GuestPusher extends BasePusher {
  constructor (appId, roomId, inavId, token, rootEleId) {
    super(appId, roomId, inavId, token, rootEleId)
    this.type = 'guest'
  }

  initGuestPusher (successBK = null, failedBK = null) {
    let VhallInteractionGuest = window.VhallInteractionGuest
    let VhallSDK = window.Vhall

    VhallSDK.ready(() => {
      this.interactor = new VhallInteractionGuest({
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
}
