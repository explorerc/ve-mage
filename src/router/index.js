import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import userService from 'src/api/user-service'

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

let vue = new Vue()

router.beforeEach((to, from, next) => {
  if (to.meta.noLogin) {
    // 不需要登录
    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    if (to.name === 'login') {
      if (isLogin) {
        next('/setAccount')
      } else {
        vue
          .$config({loading: true})
          .$get(userService.GET_ACCOUNT)
          .then(res => {
            sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
            sessionStorage.setItem('isLogin', true)
            next('/setAccount')
          })
      }
    }
    next()
    return false
  } else {
    if (to.meta.noAuth) {
      // 不需要验证是否这只密码
      next()
      return false
    } else {
      let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
      let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
      if (isLogin && accountInfo) {
        if (accountInfo.hasPassword) {
          next()
          return false
        }
        next('/setPassword')
        return false
      } else {
        vue
          .$config({loading: true})
          .$get(userService.GET_ACCOUNT)
          .then(res => {
            if (res.data.hasPassword) {
              sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
              sessionStorage.setItem('isLogin', true)
              next()
            } else {
              next('/setPassword')
            }
          })
      }
    }
  }
  if (to.meta.scrollTop && router.app) {
    router.app.$nextTick(() => {
      document.querySelector('.main-container').scrollTop = to.meta.scrollTop
    })
  }
})

export default router
