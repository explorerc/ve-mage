import Router from 'vue-router'

import routes from './routes'

export default () => {
  const router = new Router({
    routes,
    mode: 'history'
  })

  router.beforeResolve((to, from, next) => {
    console.log(router.app.$store.state.login.isLogin)
    next()
    // if (to.noAuth) {
    //   next()
    // } else {
    //   console.log(to)
    //   if (localStorage.getItem('isLogin')) {
    //     // if (setPass) {
    //     //   next()
    //     // } else {
    //     //   setTimeout((data) => {
    //     //     if (data.noPassword) {
    //     //       next('/setPassword')
    //     //     } else {
    //     //       next()
    //     //     }
    //     //   }, 200)
    //     // }
    //   } else {
    //     next('/login')
    //   }
    // }
  })

  return router
}
