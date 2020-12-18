import apiAxios from './apiAxios'
import mockAxios from './mockAxios'
export const getBaseCategoryList = () => apiAxios.get('/api')
export const getBanners = () => mockAxios.get('/banners')
export const getFloors = () =>mockAxios.get('/floors')