import axios from 'axios'
export default {
  // 首页的状态
  state: {
    bannerlist: [],
    prolist: []
  },
  // 计算属性
  getters: {},
  // 行为 --- 异步操作 - 数据请求
  actions: {
    getBannerList ({ commit }) {
      axios.get('https://www.daxunxun.com/banner').then(res => {
        let arr = []
        res.data.map(item => {
          arr.push('https://www.daxunxun.com' + item)
        })
        commit('changeBannerList', arr)
      })
    },
    getProList ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://www.daxunxun.com/douban').then(res => {
          commit('changeProList', res.data)
          resolve()
        })
      })
    },
    getMoreProList ({ commit }, params) {
      let { pageCode } = params
      return new Promise((resolve, reject) => {
        axios.get('https://www.daxunxun.com/douban?count=20&start=' + 20 * pageCode).then(res => {
          if (res.data.length === 0) {
            resolve(0) // 表示所有的数据都已加载完毕了
          } else {
            commit('changeMoreProList', res.data)
            resolve()
          }
        })
      })
    }
  },
  // 唯一改变数据的地方
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
