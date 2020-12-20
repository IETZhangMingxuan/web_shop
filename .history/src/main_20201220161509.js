import Vue from 'vue'
import 'mock/mock'
import 'vue-easyimport'
import App from './App.vue'
import router from 'router'
import store from 'store/store'
Vue.config.productionTip = false
import "nprogress/nprogress.css";
import "swiper/swiper-bundle.min.css"
/* 引入全局过渡动画文件 */
import 'common/css/transition.less'
/* 注册主线 */
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
