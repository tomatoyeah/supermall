<template>
<div id="app">
  <search searchtip="请输入一下子"/>
  <!-- <test /> -->
</div>
</template>

<script>
import Search from './components/search/index.vue'
import test from './components/other/test.vue'
export default {
  name: 'App',
  components: {
    Search,
    test
  }
}
</script>

<style lang="scss">
// #app{
//   // background-color: beige;
// }
</style>
