import axios from 'axios'
export default {
  state: {
    bannerlist: [1, 2, 3, 4, 5, 6],
    prolist: []
  },
  actions: {
    getBannerlist ({ commit }) {
      axios.get('https://www.daxunxun.com/banner').then(res => {
        let arr = []
        res.data.map(item => {
          arr.push('https://www.daxunxun.com' + item)
        })
        commit('changeBannerList', arr)
      })
    },
    getProlist ({ commit }) {
      return new Promise(resolve => {
        axios.get('https://www.daxunxun.com/douban').then(res => {
          commit('changeProList', res.data)
          resolve()
        })
      })
    },
    getMoreProList ({ commit }, { pageCode }) {
      return new Promise(resolve => {
        axios.get('https://www.daxunxun.com/douban?count=20&start=' + 20 * pageCode).then(res => {
          if (res.data.length === 0) {
            resolve(0)
          } else {
            resolve()
          }
          commit('changeMoreProList', res.data)
        })
      })
    }
  },
  mutations: {
    changeBannerList (state, data) {
      state.bannerlist = data
    },
    changeProList (state, data) {
      state.prolist = data
    },
    changeMoreProList (state, data) {
      state.prolist = [...state.prolist, ...data]
    }
  }
}
