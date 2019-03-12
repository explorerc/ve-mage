import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import userService from 'src/api/mage-service'
// import store from '../store/index'
// import EventBus from 'src/utils/eventBus'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    from.meta.scrollTop = document.querySelector('.main-container')
      ? document.querySelector('.main-container').scrollTop
      : 0
  }
})
// const vue = new Vue()
// router.beforeEach((to, from, next) => {
//   EventBus.$emit('breads', [])
//   if (to.meta.noLogin) {
//     // 不需要登录
//     let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
//     if (to.name === 'login') {
//       if (isLogin) {
//         next('/liveMager/list')
//       } else {
//         vue
//           .$config({
//             loading: true,
//             handlers: true
//           })
//           .$get(userService.GET_ACCOUNT)
//           .then(res => {
//             store.commit('login/ACCOUNT_INFO', res.data)
//             sessionStorage.setItem('isLogin', true)
//             next('/liveMager/list')
//           })
//           .catch(() => {
//             next()
//           })
//       }
//     }
//     next()
//     return false
//   } else {
//     if (to.meta.noAuth) {
//       // 不需要验证是否这只密码
//       next()
//       return false
//     } else {
//       let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
//       let accountInfo = store.getters['login/accountInfo']
//       if (isLogin && accountInfo && accountInfo.userName) {
//         if (accountInfo.hasPassword) {
//           next()
//           return false
//         }
//         next('/setPassword')
//         return false
//       } else {
//         vue
//           .$config({
//             loading: true,
//             handlers: true
//           })
//           .$get(userService.GET_ACCOUNT)
//           .then(res => {
//             if (res.data.hasPassword) {
//               // sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
//               store.commit('login/ACCOUNT_INFO', res.data)
//               sessionStorage.setItem('isLogin', true)
//               next()
//             } else {
//               next('/setPassword')
//             }
//           })
//           .catch(() => {
//             sessionStorage.setItem('isLogin', false)
//             to.name === 'login' ? next() : next('/login')
//           })
//       }
//     }
//   }
// })
router.afterEach((to, from) => {
  if (router.app) {
    setTimeout(() => {
      if (document.querySelector('.main-container') && to.meta.scrollTop) {
        document.querySelector('.main-container').scrollTop = 0
        // to.meta.scrollTop || 0
      }
    }, 1000)
  }
})

export default router
