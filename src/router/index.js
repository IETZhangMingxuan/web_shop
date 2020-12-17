/* 路由器和路由的设置 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: () => import('../pages/test1.vue')
    }]
})