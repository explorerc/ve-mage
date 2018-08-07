import Router from 'vue-router'

import interactRoutes from './interact'

export default () => {
  return new Router({
    routes: [...interactRoutes],
    mode: 'hash'
  })
}
