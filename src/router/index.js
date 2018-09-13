import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import account from 'src/api/account-manage'
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash
        }
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
})

router.beforeResolve((to, from, next) => {
  if (to.meta.noLogin) { // 不需要登录
    next()
    return false
  } else {
    if (to.meta.noAuth) { // 不需要验证是否这只密码
      next()
      return false
    } else {
      let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
      let userInfo = sessionStorage.getItem('userInfo')
      if (isLogin && userInfo && userInfo.hasPassword) {
        if (userInfo.hasPassword) {
          next()
          return false
        } else {
          next('/setPassword')
          return false
        }
      } else {
        account.getUserInfo({}).then((res) => {
          if (res.code !== 200) {
            next('/login')
            return false
          } else {
            sessionStorage.setItem('userInfo', JSON.stringify(res.data))
            sessionStorage.setItem('isLogin', true)
            next()
            return false
          }
        })
      }
    }
  }
})

export default router
