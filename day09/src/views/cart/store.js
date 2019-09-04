// import axios from 'axios'
export default {
  state: {
    cartlist: [],
    lovelist: []
  },
  getters: {
    len (state) {
      return state.cartlist.length
    },
    totalPrice (state) {
      let totalPrice = 0
      state.cartlist.map(item => {
        item.flag ? totalPrice += item.num * item.price : totalPrice += 0
      })
      return totalPrice
    },
    totalNum (state) {
      let totalNum = 0
      state.cartlist.map(item => {
        item.flag ? totalNum += item.num : totalNum += 0
      })
      return totalNum
    }
  },
  actions: {
    getCartList ({ commit }) {
      let arr = [
        {
          id: 'item1',
          title: '利群',
          price: 16,
          num: 2
        },
        {
          id: 'item2',
          title: '南京',
          price: 15,
          num: 5
        },
        {
          id: 'item3',
          title: '大前门',
          price: 5,
          num: 1
        }
      ]
      setTimeout(() => {
        arr.map(item => {
          item.flag = false
        })
        commit('changeCartList', arr)
      }, 1500)
    },
    changeSelect ({ commit, state }, { flag }) {
      console.log(state)
      let arr = state.cartlist
      arr.map(item => {
        item.flag = flag
      })
      commit('changeCartList', arr)
    },
    changeItem ({ commit, state }, { flag }) {
      let arr = state.cartlist
      return new Promise(resolve => {
        if (flag) {
          let test = arr.findIndex(item => item.flag === false)
          if (test === -1) { resolve(0) }
        } else { // 有没被选中
          resolve(1)
        }
      })
    },
    deleteItem ({ commit, state }, { index, id }) {
      setTimeout(() => {
        // 数据库删除成功
        let arr = state.cartlist
        arr.splice(index, 1)
        commit('changeCartList', arr)
      }, 500)
    }
  },
  mutations: {
    changeCartList (state, data) {
      state.cartlist = data
    }
  }
}
