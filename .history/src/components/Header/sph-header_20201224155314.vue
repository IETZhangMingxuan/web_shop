<template>
  <div id="sph-header">
    <!-- 头部组件 -->
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p>
              <span>请</span>
              <router-link to="/login">登录</router-link>
              <router-link to="/register" class="register">免费注册</router-link>
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <router-link to="/shopcart">我的购物车</router-link>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" title="尚品汇" to="/home">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
              placeholder="请输入要搜索的商品"
            />
            <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">
              搜索
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    /* 点击搜索按钮触发的事件 */
    toSearch(){
      /* 要携带上三级分类的参数 */
      let location = {name:"search"}
      /* 携带query数据 */
      if(Object.keys(this.$route.query).length !== 0){
        location.query = this.$route.query
      }
      /* 携带params数据 */
      if(this.keyword){
        location.params = {
          keyword:this.keyword
        }
      }
      /* this.$router.push(location) */
      if(this.$route.path.toLowerCase()..startsWith("/search")){
                    this.$router.replace(localtion)
                }else{
                    this.$router.push(localtion)
                }
      // ↑版本回退Backspace问题
      /* ↑当从search组件跳转到search组件 应该使用replace 不能使用push;因为我们不想缓存当前的url
          当从其他组件跳转到search组件 应该使用push 不能使用replace;因为我们想缓存当前的url */
      /* ------------------------------------------- */
      // this.$router.push(`/search/${this.keyword}`)
      // this.$router.push({
      //   // path:"/search",
      //   name:'search',
      //   params:{
      //     keyword:this.keyword
      //   }
      // })
    }
  },
  mounted(){
    this.$bus.$on("clearHInput",val=>{
      this.keyword = val
    })
  }
};
</script>
<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
