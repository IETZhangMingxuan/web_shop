<template>
<div id="search">
    <h2>Search组件</h2>
    <!-- search按钮带回来的数据 需要解耦 -->
    <span class="test">keyword:{{keyword}}</span><br/>
    <!-- 一级分类名 -->
    <span class="test">categoryName:{{categoryName}}</span><br/>
    <!-- 一级分类商品id -->
    <span class="test">category1Id:{{category1Id}}</span><br/>
    <!-- 二级分类商品id -->
    <span class="test">category2Id:{{category2Id}}</span><br/>
    <!-- 三级分类商品id -->
    <span class="test">category3Id:{{category3Id}}</span><br/>
</div>
</template>
<script>
export default {
    // props:{
    //     keyword:String,
    //     categoryName:[Number,String],
    //     category1Id,
    //     category2Id,
    //     category3Id
    // }
    props:["keyword","categoryName","category1Id","category2Id","category3Id"]

};
</script>
<style scoped>
    /* 测试用 */
    #search .test{
        font-size: 16px;
        font-weight: bold;
        color: orangered;
        font-family:"consolas"
    }
</style>