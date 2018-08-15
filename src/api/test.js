import utils from 'src/utils'

const test = {
  login (data) {
    return utils.ajax({
      method: 'post',
      url: '/edu/user/captcha-login',
      params: data
    })
  },
  getCode (params) {
    return utils.ajax({
      method: 'post',
      url: '/edu/user/code',
      params
    })
  }
}
export default test
