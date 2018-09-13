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
  if (to.meta.scrollTop && router.app) {
    router.app.$nextTick(() => {
      document.querySelector('.main-container').scrollTop = to.meta.scrollTop
    })
  }
  let steps = JSON.parse(sessionStorage.getItem('steps'))
  if (steps === null) {
    steps = []
  }
  let len = steps.length
  if (len > 0) {
    let prev = steps[len - 1].path.split('/')[1]
    let curt = to.fullPath.split('/')[1]
    if (prev !== curt) {
      steps = []
      steps.push({
        path: to.fullPath
      })
    } else {
      let index = steps.findIndex(item => item.path === to.fullPath)
      if (index !== -1) {
        steps = steps.slice(0, index)
      }
    }
  } else {
    steps.push({
      path: to.fullPath
    })
  }
  sessionStorage.setItem('steps', JSON.stringify(steps))
})

export default router
