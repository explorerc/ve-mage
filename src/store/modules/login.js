import * as types from '../mutation-types'
const loginModules = {
  namespaced: true,
  state: {
    isLogin: false,
    accountInfo: {},
    contactInfo: {}
  },
  getters: {
    isLoginGetter: (state) => state.isLogin,
    accountInfo: (state) => state.accountInfo,
    contactInfo: (state) => state.contactInfo
  },
  mutations: {
    [types.UPDATE_IS_LOGIN] (state, status) {
      state.isLogin = status
    },
    [types.ACCOUNT_INFO] (state, status) {
      state.accountInfo = status
    },
    [types.CONTACTINFO_INFO] (state, status) {
      state.contactInfo = status
    }
  }
}

export default loginModules
