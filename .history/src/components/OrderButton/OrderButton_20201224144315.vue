<template>
    <ul class="sui-nav">
      <!-- 这个判断,判断这个1它不是数字 是字符串 -->
      <li :class="{ active: options.order.split(':')[0] === `1` }">
        <a href="javascript:;" style="display:flex;align-items:center"
          ><span>综合</span
          ><i class="iconfont icon-jiantou-xia" style="font-size:12px"></i
        ></a>
      </li>
      <li>
        <a href="javascript:;">销量</a>
      </li>
      <li>
        <a href="javascript:;">新品</a>
      </li>
      <li>
        <a href="javascript:;">评价</a>
      </li>
      <!-- 这个class决定选中高亮的是综合还是价格,接口处给了1是综合,2是价格 -->
      <li :class="{ active: options.order.split(':')[0] === `2` }">
        <a href="javascript:;" style="display:flex;align-items:center"
          ><span>价格</span
          ><i class="iconfont icon-jiantou" style="font-size:12px"></i
        ></a>
      </li>
      <!-- <li :class="{ active: options.order.split(':')[0] === `2` }">
                  <a href="javascript:;">价格<i class="iconfont icon-jiantou-xia" style="font-size:12px"></i
                  ></a>
                </li> -->
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
