import {
    getBaseCategoryList
} from 'http/http'
import { getBanners } from 'http/http';
const connectSuccess = 200;
export default {
    state: {
        CategoryList: [],
        banners:[]
    },
    getters: {},
    mutations: {
        getCategoryList(state, CategoryList) {
            state.CategoryList = CategoryList
        },
        getBanners(state,banners){
            state.banners = banners
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
        },
        async getBanners(store){
            const {code,data} = await getBanners;
            console.log(code, data);
            if(code == 200){
                store.commit("getBanners",data)
            }
        }
    }
}