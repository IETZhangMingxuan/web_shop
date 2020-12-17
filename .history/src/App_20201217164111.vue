<template>
  <div id="app">
    <Sph-header/>
    <router-view></router-view>
    <Sph-footer v-show="!$route.meta.xxx"/>
  </div>
</template>

<script>
// import One from './components/One/one'
// import Two from './components/Two/two'
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
