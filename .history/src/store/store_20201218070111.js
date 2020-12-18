import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import home from './module/home'
Vue.use(Vuex)
export default new Vuex.store{
    state,
    getters,
    actions,
    mutations,
    module:{
        home
    }
}