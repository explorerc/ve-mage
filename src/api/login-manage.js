import utils from 'src/utils'

const LoginManage = {
  register (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/reg',
      params: data
    })
  },
  loginByPhone (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/mobile-login',
      params: data
    })
  },
  loginByAccount (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/business-user/account-login',
      params: data
    })
  }
}
export default LoginManage
