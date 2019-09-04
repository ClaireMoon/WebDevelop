const state = {
  loginState: 0
}

const getters = {}

const actions = {
  login ({ commit }) {
    commit('changeLoginState', 1)
  }
}
const CHANGE_LOGIN_STATE = 'changeLoginState'
const mutations = {
  [CHANGE_LOGIN_STATE] (state, data) {
    state.loginState = data
  }
}

export default {
  namespaced: true, // 用来区分模块
  state,
  getters,
  actions,
  mutations
}
