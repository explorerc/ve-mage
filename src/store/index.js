import Vuex from 'vuex'
import aModules from './modules/a'
import bModules from './modules/b'
import loginModules from './modules/login'

const isDev = process.env.NODE_ENV !== 'production'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: {
      num: 3
    },
    getters: {
      isEven: (state) => state.num % 2 === 0
    },
    mutations: {
      addNum (state, data) {
        state.num += data.num
      }
    },
    actions: {
      addNumAsync ({
        commit
      }, data) {
        setTimeout(() => {
          commit('addNum', data)
        }, 2000)
      }
    },
    modules: {
      a: aModules,
      b: bModules,
      login: loginModules
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
