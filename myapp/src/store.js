import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/views/home/store'
import kind from '@/views/kind/store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    kind
  }
})
