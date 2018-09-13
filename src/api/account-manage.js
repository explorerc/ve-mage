import utils from 'src/utils'

const Account = {
  getAccount (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/info',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  changePassword (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-password',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  setPassword (data) { // 首次设置密码
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/first-set-password',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  setCompanyInfo (data) { // 设置账户信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  setUserInfo (data) { // 设置指定联系人信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-linkman',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  getUserInfo (data) { // 获取指定联系人信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/linkman-info',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  verifyMobile (data) { // 验证旧手机号
    return utils.ajax({
      method: 'post',
      url: '/common/message/verify-code',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  updateMobile (data) { // 更换手机号
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-mobile',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  updateMobileByToken (data) { // 找回密码
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/update-password-by-code-token',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  getIndustryList (data) { // 获取职位下拉菜单
    return utils.ajax({
      method: 'post',
      url: '/common/user/industry-list',
      params: data,
      headers: {
        noAlert: true
      }
    })
  }
}
export default Account
