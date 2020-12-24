<template>
    <ul class="sui-nav">
      <li v-for="(orderType,index) in orderTypes" :key="index" :class="{active:orderActive(orderType.id)}">
        <a href="javascript:;" style="display:flex;align-items:center">
            <span>{{orderType.name}}</span>
            <i class="iconfont icon-jiantou-xia" style="font-size:12px"></i>
        </a>
      </li>
    </ul>
</template>
<script>
export default {
    props:["orderTypes","order"],
    computed:{
        orderActive(){
            /* 要返回一个布尔值, */
            return xBoolean=>{
                return this.order.split(':')[0] === xBoolean
            }
        }
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
