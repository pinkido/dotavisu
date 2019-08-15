<template>
  <div id='app'>
    <!-- <img src="./assets/logo.png"> -->
    <index></index>
  </div>
</template>

<script>
import index from '@/pages/index'
export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei Light', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fff;
  margin-top: 0px;
  height: 600px;
  min-height: 600px;
  min-width: 850px;
}
</style>
