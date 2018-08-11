import Vuex from 'vuex'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: {

    }
    // mutations,
    // getters,
    // actions
  })

  //   if (module.hot) {
  //     module.hot.accept([
  //       './state/state',
  //       './mutations/mutations',
  //       './actions/actions',
  //       './getters/getters'
  //     ], () => {
  //       const newState = require('./state/state').default
  //       const newMutations = require('./mutations/mutations').default
  //       const newActions = require('./actions/actions').default
  //       const newGetters = require('./getters/getters').default

  //       store.hotUpdate({
  //         state: newState,
  //         mutations: newMutations,
  //         getters: newGetters,
  //         actions: newActions
  //       })
  //     })
  //   }

  return store
}
