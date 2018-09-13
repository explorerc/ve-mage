import utils from 'src/utils'

const LoginManage = {
  register (data) { // 注册
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/reg',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  loginByPhone (data) {
    return utils.ajax({ // 手机快捷登录
      method: 'post',
      url: '/user/business-user/mobile-login',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  loginByAccount (data) { // 账号登录
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/account-login',
      params: data,
      headers: {
        noAlert: true
      }
    })
  },
  logOff (data) { // 退出登录
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/signout',
      params: data
    })
  }
}
export default LoginManage
