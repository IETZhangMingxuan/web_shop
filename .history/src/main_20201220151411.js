import Vue from 'vue'
import 'vue-easyimport'
import App from './App.vue'
import router from 'router'
import 'mock/mock'
import Mock from 'mockjs'
import store from 'store/store'
Vue.config.productionTip = false
import "nprogress/nprogress.css";
/* 引入全局过渡动画文件 */
import 'common/css/transition.less'
/* 注册主线 */
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
