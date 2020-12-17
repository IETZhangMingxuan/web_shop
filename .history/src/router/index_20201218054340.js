/* 路由器和路由的设置 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/home',
        component: () => import('../pages/Home/Home')
    }, {
        path: '/login',
        component: () => import('../pages/Login/Login'),
        meta: {
            xxx: true
        }
    }, {
        path: '/register',
        component: () => import('../pages/Register/Register'),
        meta: {
            xxx: true
        }

    }, {
        path: '/shopcart',
        component: () => import('../pages/ShopCart/ShopCart')
    }, {
        path: '/search',
        component:() => import('../pages/Search/Search')
    }, {
        path: '/',
        redirect: '/home'
    }]
})