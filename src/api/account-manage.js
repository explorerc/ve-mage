import utils from 'src/utils'

const Account = {
  getAccount (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/info',
      params: data
    })
  },
  changePassword (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-password',
      params: data
    })
  },
  setPassword (data) { // 首次设置密码
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/first-set-password',
      params: data
    })
  }
}
export default Account
