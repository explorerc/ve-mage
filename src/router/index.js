import Router from 'vue-router'

import routes from './routes'

import account from 'src/api/account-manage'
export default () => {
  const router = new Router({
    routes,
    mode: 'history'
  })

  router.beforeResolve((to, from, next) => {
    // console.log(router.app.$store.state.login.isLogin)
    // next()
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
        if (isLogin && userInfo.hasPassword) {
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
        // if (sessionStorage.getItem('isLogin')) {
        //   // if (setPass) {
        //   //   next()
        //   // } else {
        //   //   setTimeout((data) => {
        //   //     if (data.noPassword) {
        //   //       next('/setPassword')
        //   //     } else {
        //   //       next()
        //   //     }
        //   //   }, 200)
        //   // }
        // } else {
        //   next('/login')
        // }
      }
    }
  })

  return router
}
