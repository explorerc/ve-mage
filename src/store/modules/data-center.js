import * as types from '../mutation-types'

const liveMagerModules = {
  namespaced: true,
  state: {
    selectMenu: 0
  },
  getters: {
    selectMenu: state => state.selectMenu
  },
  mutations: {
    [types.DATA_SELECT_MENU] (state, reLoad) {
      sessionStorage.setItem(types.DATA_SELECT_MENU, reLoad)
      state.selectMenu = reLoad
    }
  }
}

export default liveMagerModules
