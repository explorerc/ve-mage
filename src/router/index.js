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
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) { // 判断该路由是否需要登录权限
    if (JSON.parse(localStorage.getItem('isLogin'))) { // 判断本地是否存在access_token
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
  /* 如果本地 存在 token 则 不允许直接跳转到 登录页面 */
  if (to.fullPath === '/login') {
    if (JSON.parse(localStorage.getItem('isLogin'))) {
      next({
        path: from.fullPath
      })
    } else {
      next()
    }
  }
})
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
