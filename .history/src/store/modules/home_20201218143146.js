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
            let {
                code,
                data
            } = await getBaseCategoryList();
            if (code == 200) {
                console.log(code, data);
                store.commit("getCategoryList", data);
                return data
            }

        }
    }
}