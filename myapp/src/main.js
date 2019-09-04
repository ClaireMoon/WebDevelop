import Vue from 'vue' // export default ajax
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// const Vue = require('vue')   module.exports = ajax

Vue.config.productionTip = false

// Vue.component('my-com', {})
// 全局自定义指令 v-focus
// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted (el) { // el代表的就是DOM
//     el.focus()
//   }
// })

// 全局过滤器 {{ 1 | sexFilter }}
// Vue.filter('sexFilter', function (val) {
//   return val === 1 ? '男' : '女'
// })
// Vue.filter('moneyFilter', function (val) {
//   return '￥' + val
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') // 免去 在页面中使用 <app></app>

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: {
//     app: App  // 在页面中使用 <app></app>
//   }
// })
