import utils from 'src/utils'

const test = {
  login ({ account, password }) {
    return utils.ajax({
      method: 'post',
      url: '/edu/user/login',
      params: {
        account,
        password
      }
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
