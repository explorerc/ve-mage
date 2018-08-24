import createApp from './create-app'
import EventBus from 'src/utils/eventBus'

const {
  app,
  router,
  store
} = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

EventBus.$on('auth', () => {
  router.push('/login')
})

router.onReady(() => {
  app.$mount('#root')
})

export default {
  app,
  router,
  store
}
