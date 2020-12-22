import {
    getSearchData
} from "http/http"
export default {
    state: {
        SearchData: {}, //包含search组件所有数据
    },
    getters: {

    },
    mutations: {
        getSearchData(state, data) {
            state.SearchData = data;
        }
    },
    actions: {
        async getSearchData({commit},options) {
            const {
                code,
                data
            } = await getSearchData(options);
            console.log("搜索到的数据为:"+code,data);
            if (code === 200) {
                commit("getSearchData", data)
            }
            return data
        }
    }
}