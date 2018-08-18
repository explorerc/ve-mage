import Router from 'vue-router'

import routes from './routes'

export default () => {
  const router = new Router({
    routes,
    mode: 'history'
  })

  // router.beforeEach((to, from, next) => {
  //   if (to.noAuth) {
  //     next()
  //   } else {
  //     if (localStorage.getItem('isLogin')) {
  //       if (setPass) {
  //         next()
  //       } else {
  //         setTimeout((data) => {
  //           if (data.noPassword) {
  //             next('/setPassword')
  //           } else {
  //             next()
  //           }
  //         }, 200)
  //       }
  //     } else {
  //       next('/login')
  //     }
  //   }
  // })

  return router
}
