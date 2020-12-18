import {getBaseCategoryList} from 'http/http'
const OK = '200'
export default {
    state:{
        CategoryList:[]
    },
    getters:{},
    mutations:{
        updateCategoryList(state,CategoryList){
            state.CategoryList = CategoryList
         }
    },
    actions:{
        async updateCategoryList(store){
            const {code,data} = await getBaseCategoryList()

            store.commit(CategoryList);
        }
    }
}