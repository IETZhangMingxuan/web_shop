<template>

  <ul class="sui-nav">
  </ul>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
    .sui-nav {
        display: inline-flex;
        margin: 0 10px 0 0;
        li {
            float: left;
            line-height: 18px;
            margin-left: 20px;
            a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
            }
            &.active {
                a {
                    background: #e1251b;
                    color: #fff;
                }
            }
        }
    }
</style>
