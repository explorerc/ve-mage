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
  },
  setCompanyInfo (data) { // 设置账户信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update',
      params: data
    })
  },
  setUserInfo (data) { // 设置指定联系人信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-linkman',
      params: data
    })
  },
  getUserInfo (data) { // 获取指定联系人信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/linkman-info',
      params: data
    })
  },
  verifyMobile (data) { // 验证旧手机号
    return utils.ajax({
      method: 'post',
      url: '/common/sms/verify-code',
      params: data
    })
  },
  updateMobile (data) { // 更换手机号
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-mobile',
      params: data
    })
  },
  updateMobileByToken (data) { // 找回密码
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-password-by-code-token',
      params: data
    })
  }
}
export default Account
