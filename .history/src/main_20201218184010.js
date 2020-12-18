import Vue from 'vue'
import 'vue-easyimport'
import App from './App.vue'
import router from './router'
import './mock/mock'
import store from 'store/store'
import throttle from 'lodash/throttle'
Vue.config.productionTip = false

/* 注册主线 */
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
