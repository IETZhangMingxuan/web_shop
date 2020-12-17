<template>
<div id="search">
    <h2>Search组件</h2>
    <span class="test">{{$route.params.keyword}}</span>
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