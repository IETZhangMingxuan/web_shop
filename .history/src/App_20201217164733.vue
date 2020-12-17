<template>
  <div id="app">
    <Sph-header/>
    <router-view></router-view>
    <Sph-footer v-show="!$route.meta.xxx"/>
  </div>
</template>

<script>
import SphHeader from './components/Header/sph-header'
import SphFooter from './components/Footer/sph-footer'
export default {
  name: 'App',
  components: {}
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
