<template>
<div id="search">
    <h2>Search组件</h2>
    <!-- search按钮带回来的数据 需要解耦 -->
    <span>怎么看不到</span>
    <span class="test">keyword:{{$route.params.keyword}}</span><br/>
    <!-- 一级分类名 -->
    <span class="test">categoryName:{{$route.params.categoryName}}</span><br/>
    <!-- 一级分类商品id -->
    <span class="test">category1Id:{{$route.params.category1Id}}</span><br/>
    <!-- 二级分类商品id -->
    <span class="test">category2Id:{{$route.params.category2Id}}</span><br/>
    <!-- 三级分类商品id -->
    <span class="test">category3Id:{{$route.params.category3Id}}</span><br/>
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