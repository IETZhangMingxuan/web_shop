<template>
    <ul class="sui-nav">
      <li v-for="(orderType,index) in orderTypes" :key="index" :class="{active:options.order.split(':')[0] === `1`}">
        <a href="javascript:;" style="display:flex;align-items:center"
          ><span>综合</span
          ><i class="iconfont icon-jiantou-xia" style="font-size:12px"></i
        ></a>
      </li>
    </ul>
</template>
<script>
export default {
    props:["orderTypes","order"],
    computed:{

    }
};
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
