<template>
  <div id="app">
    <Two/>
    <router-view></router-view>
    <One v-show="!$route.meta.xxx"/>
  </div>
</template>

<script>
import One from './components/One/one'
export default {
  name: 'App',
  components: {
    One,Two
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
