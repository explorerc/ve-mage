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
  getUserInfo (data) { // 设置指定联系人信息
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/linkman-info',
      params: data
    })
  }
}
export default Account
