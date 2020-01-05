<template>
  <div>
    <list-component :todoList="todoList" />
  </div>
</template>

<script>
import ListComponent from '@/components/Todo/List'
import Todo from '@/models/Todo'

export default {
  name: 'TodoListPage',
  components: {
    ListComponent
  },
  data() {
    return {
      todoList: []
    }
  },
  created() {
    this.todoList = this.getTodoList()
  },
  methods: {
    getTodoList() {
      return Todo.getList()
    }
  }
}
</script>
