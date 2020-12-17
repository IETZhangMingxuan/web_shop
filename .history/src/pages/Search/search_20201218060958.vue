<template>
<div id="search">
    <span class="test">{{$route.params.keyword}}</span>
</div>
</template>
<script>
export default {};
</script>
<style scoped>
    /* 测试用 */
    #search .test{
        font-size: 5em;
    }
</style>