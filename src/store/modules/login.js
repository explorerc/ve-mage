const loginModules = {
  namespaced: true,
  state: {
    isLogin: false
  },
  getters: {
    isLoginGetter: (state) => state.isLogin
  },
  mutations: {
    'updateIsLogin' (state, val) {
      state.isLogin = val
    }
  }
}

export default loginModules
