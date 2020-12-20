/* 路由器和路由的设置 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
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
        name:'search',
        path: '/search/:keyword?',
        component:() => import('../pages/Search/Search'),
        props:route=>({
            /* route : 路由对象 */
            keyword:route.params.keyword,
            categoryName:route.query.categoryName,
            category1Id:route.query.category1Id,
            category2Id:route.query.category2Id,
            category3Id:route.query.category3Id,
        })
    }, {
        path: '/',
        redirect: '/home'
    }]
})