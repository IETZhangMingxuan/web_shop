import {
    getBaseCategoryList
} from 'http/http'
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
            const {
                code,
                data
            } = await getBaseCategoryList();
            console.log(code, data);
            store.commit("getCategoryList", data.data);
            return data
        }
    }
}