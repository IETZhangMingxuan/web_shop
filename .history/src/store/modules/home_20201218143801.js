import {
    getBaseCategoryList
} from 'http/http'
const connectSuccess = 200;
export default {
    state: {
        CategoryList: []
    },
    getters: {},
    mutations: {
        getCategoryList(state, CategoryList) {
            state.CategoryList = CategoryList
        }
    },
    actions: {
        async getCategoryList(store) {
            let {
                code,
                data
            } = await getBaseCategoryList();
            console.log(code, data);
            if (code == connectSuccess) {
                store.commit("getCategoryList", data);
                return data
            }
        }
    }
}