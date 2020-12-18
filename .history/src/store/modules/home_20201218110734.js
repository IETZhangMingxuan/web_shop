import {
    getBaseCategoryList
} from 'http/http'
const OK = 200;
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
            console.log(code,data);
            if (code === 200) {
                store.commit("getCategoryList", data);
            }
            return data
        }
    }
}