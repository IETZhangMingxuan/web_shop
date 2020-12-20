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
        /* 三级分类列表 */
        async getCategoryList(store) {
            let {
                code,
                data
            } = await getBaseCategoryList();
            console.log(code, data);
            if (code == connectSuccess) {
                store.commit("getCategoryList", data.filter((item,index)=>{return index<15}));
                return data
            }
        }
    }
}