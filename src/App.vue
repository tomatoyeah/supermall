<template>
<div id="app">
  <!-- <search searchtip="请输入一下子"/> -->
  <!-- <todo-list /> -->
  <test/>
</div>
</template>

<script>
import Search from './components/search'
import TodoList from './components/todolist'
import Test from './components/test'
export default {
  name: 'App',
  components: {
    Search,
    TodoList,
    Test
  }
}
</script>

<style lang="scss">
// #app{
//   // background-color: beige;
// }
</style>
