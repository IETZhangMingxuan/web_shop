<template>
<div id="search">
    <h2>Search组件</h2>
    <span class="test">{{$route.params.keyword}}</span>
    <span class="test">{{$route.params.categoryName}}</span>
    <span class="test">{{$route.params.categoryId1}}</span>
    <span class="test">{{$route.params.categoryId2}}</span>
    <span class="test">{{$route.params.categoryId3}}</span>
</div>
</template>
<script>
export default {};
</script>
<style scoped>
    /* 测试用 */
    #search .test{
        font-size: 2em;
        font-weight: bold;
        color: orangered;
    }
</style>