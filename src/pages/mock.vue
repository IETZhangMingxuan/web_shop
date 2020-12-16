<template>
<div></div>
</template>
<script>
import axios from 'axios'
import {getBaseCategoryList,getBanners,getFloors} from 'http/http'
export default {
    name:'mock',
    async created(){
        const body = await getBanners();
        console.log(body.keywords);
    }

};
</script>
<style>
</style>