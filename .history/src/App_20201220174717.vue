<template>
  <div id="app">
    <Sph-header/>
    <router-view></router-view>
    <Sph-footer v-show="!$route.meta.xxx"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapActions(["getCategoryList","getBanners"])
  },
  components: {},
  async created(){
    /* 获取三级分类列表的数据 */
     await this.getCategoryList();
     await this.getBanners();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  color: #2c3e50;
}
</style>
