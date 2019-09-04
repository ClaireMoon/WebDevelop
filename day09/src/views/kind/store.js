import axios from 'axios'

export default {
  state: {
    kindlist: []
  },
  getters: {},
  actions: {
    getKindList ({ commit }) { // context    context.commit()   参数解构赋值
      axios.get('https://www.daxunxun.com/douban').then(res => {
        commit('changeKindList', res.data)
      })
    }
  },
  mutations: {
    changeKindList (state, data) {
      state.kindlist = data
    }
  }
}
