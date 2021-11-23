<template>
<div id="app">
  <!-- <search searchtip="请输入一下子"/> -->
  <todo-list />
</div>
</template>

<script>
import Search from './components/search'
import TodoList from './components/todolist'
export default {
  name: 'App',
  components: {
    Search,
    TodoList
  }
}
</script>

<style lang="scss">
// #app{
//   // background-color: beige;
// }
</style>
