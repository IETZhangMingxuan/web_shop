<template>
<div id="search">
    <h2>Search组件</h2>
    <!-- search按钮带回来的数据 需要解耦 -->
    <span>怎么看不到</span>
    <span class="test">{{$route.params.keyword}}</span>
    <!-- 一级分类名 -->
    <span class="test">{{$route.params.categoryName}}</span>
    <!-- 一级分类商品id -->
    <span class="test">{{$route.params.category1Id}}</span>
    <!-- 二级分类商品id -->
    <span class="test">{{$route.params.category2Id}}</span>
    <!-- 三级分类商品id -->
    <span class="test">{{$route.params.category3Id}}</span>
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