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
    ...mapActions(["updateCategoryList"])
  },
  components: {},
  created(){
    this.updateCategoryList()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}
</style>
