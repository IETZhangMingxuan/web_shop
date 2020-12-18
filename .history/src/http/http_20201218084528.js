import apiAxios from './apiAxios'
import mockAxios from './mockAxios'
export const getBaseCategoryList = () => apiAxios.get('/product/getBaseCategoryList')
export const getBanners = () => mockAxios.get('/banners')
export const getFloors = () =>mockAxios.get('/floors')