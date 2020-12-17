import Vue from 'vue'
import App from './App.vue'
import 'vue-easyimport'
import router from './router'
import './mock/mock'
import store from 'store/store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
