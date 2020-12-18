import {getBaseCategoryList} from 'http/http'
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
        updateCategoryList(store,CategoryList){
            store.commit(CategoryList);
        }
    }
}