import Vue from 'vue'
import Vuex from 'vuex'
// import appModules from './modules/app'
// import aModules from './modules/a'
// import bModules from './modules/b'
// import loginModules from './modules/login'
// import liveMagerModules from './modules/liveMager'
// import dataCenterModules from './modules/data-center'
Vue.use(Vuex)

// const isDev = process.env.NODE_ENV !== 'production'
//
// const store = new Vuex.Store({
//   strict: isDev,
//   state: {
//     num: 3
//   },
//   getters: {
//     isEven: (state) => state.num % 2 === 0
//   },
//   mutations: {
//     addNum (state, data) {
//       state.num += data.num
//     }
//   },
//   actions: {
//     addNumAsync ({
//       commit
//     }, data) {
//       setTimeout(() => {
//         commit('addNum', data)
//       }, 2000)
//     }
//   },
//   modules: {
//     app: appModules,
//     a: aModules,
//     b: bModules,
//     login: loginModules,
//     liveMager: liveMagerModules,
//     dataCenter: dataCenterModules
//   }
// })

// export default store
export default new Vuex.Store({
  state: {
    // 是否登录判断
    isLogin: ''
  },
  mutations: {
    login: (state, n) => {
      // 传入登录状态islogin
      let isLogin = JSON.parse(n)
      localStorage.setItem('isLogin', JSON.stringify(isLogin))
      console.log(isLogin)
      state.islogin = isLogin
    }
  }
})
