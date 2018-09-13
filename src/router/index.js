import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import account from 'src/api/account-manage'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    from.meta.scrollTop = document.querySelector('.main-container') ? document.querySelector('.main-container').scrollTop : 0
  }
})

router.beforeResolve((to, from, next) => {
  if (to.meta.noLogin) { // 不需要登录
    next()
  } else {
    if (to.meta.noAuth) { // 不需要验证是否设置密码
      next()
    } else {
      let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
      let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
      if (isLogin && accountInfo) {
        if (accountInfo.hasPassword) {
          next()
        } else {
          next('/setPassword')
        }
      } else {
        account.getAccount({}).then((res) => {
          if (res.code !== 200) {
            next('/login')
          } else {
            if (res.data.hasPassword) {
              sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
              sessionStorage.setItem('isLogin', true)
              next()
            } else {
              next('/setPassword')
            }
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
