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
        async getSearchData({
            commit
        }) {
            const {
                code,
                data
            } = await getSearchData();
            console.log("搜索到的数据为:"+cade,data);
            if (code === 200) {
                commit("getSearchData", data)
            }
        }
    }
}