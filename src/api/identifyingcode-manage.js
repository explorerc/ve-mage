import utils from 'src/utils'

const IdentifyingcodeManage = {
  getCode (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/sms/send-code',
      params: data
    })
  }
}
export default IdentifyingcodeManage
