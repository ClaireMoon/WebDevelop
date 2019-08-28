import Vue from 'vue' // export default ajax
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// const Vue = require('vue')   module.exports = ajax

Vue.config.productionTip = false

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
