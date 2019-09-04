import axios from 'axios'
export default {
  // 分类的状态
  state: {
    kindlist: [1, 2, 3]
  },
  // 计算属性
  getters: {},
  // 行为 --- 异步操作 - 数据请求
  actions: { // 获取分类页面的数据
    getKindList (context) { // context是默认的参数
      axios.get('https://www.daxunxun.com/douban').then(res => {
        // 唯一改变数据的方式就是显示的提交mutation
        context.commit('changeKindList', res.data)
      })
    }
  },
  // 唯一改变数据的地方
  mutations: {
    changeKindList (state, data) {
      state.kindlist = data
    }
  }
}
