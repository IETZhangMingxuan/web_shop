/* 本插件用于快速建立Vue2.0所需环境 */
/* 本插件需要在 node 环境下运行 */
const fs = require('fs');

/* 1.快速搭建vue-router环境 */
fs.mkdir(__dirname + '/router1', {
    recursive: true
}, err => {
    if (err) throw err;
    console.log(`router文件夹已创建成功`)
});
//这个必须是同步创建的
fs.writeFileSync(__dirname + '/router1/index.js',
    `import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/test1',
        component: () => import('../pages/test1.vue')
    }]
})`);
/* 2.快速搭建vuex环境 */
fs.mkdirSync(__dirname + '/store1', {
    recursive: true
}, err => {
    if (err) throw err;
    console.log(`store文件夹已创建成功`)
});
fs.mkdirSync(__dirname + '/store1/modules', {
    recursive: true
});
fs.writeFile(__dirname + '/store1/store.js',
    `
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import testA from './moduls/testA'
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        testA:testA
    }
})
`, err => {
        if (err) throw err;
        console.log(`store.js已创建成功`)
    });
fs.writeFile(__dirname + '/store1/actions.js', 'export default {}', err => {
    if (err) throw err;
    console.log(`actions.js已创建成功`)
});
fs.writeFile(__dirname + '/store1/mutations.js', 'export default {}', err => {
    if (err) throw err;
    console.log(`mutations.js已创建成功`)
});
fs.writeFile(__dirname + '/store1/state.js', 'export default {}', err => {
    if (err) throw err;
    console.log(`state.js已创建成功`)
});
fs.writeFile(__dirname + '/store1/getters.js', 'export default {}', err => {
    if (err) throw err;
    console.log(`getters.js已创建成功`)
});
fs.writeFile(__dirname + '/store1/modules/testA.js', 'export default {}', err => {
    if (err) throw err;
    console.log(`testA.js已创建成功`)
});
/* 3.快速搭建axios环境 */
fs.mkdirSync(__dirname + '/http1', {
    recursive: true
}, err => {
    if (err) throw err;
    console.log(`http文件夹已创建成功`)
});
fs.writeFileSync(__dirname + '/http1/http.js', 'export default {}');
fs.writeFileSync(__dirname + '/http1/apiAxios.js', `import axios from 'axios'
const apiAxiosIns = axios.create({
    baseURL: '/api(在此处修改路由)',
    timeout: 8000
})
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么(自定义添加了.data)
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default apiAxiosIns`);