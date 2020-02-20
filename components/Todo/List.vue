<template>
  <div>
    <ul class="todo-list">
      <li class="todo-container mb-4" v-for="todo in todoList" :key="todo.id">
        <todo-item
          :todoItem="todo"
          @deleted="deleted"
          @cleared="cleared"
        ></todo-item>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@@/components/Todo/Item'
export default {
  name: 'TodoList',
  props: { todoList: Array },
  data() {
    return {}
  },
  components: {
    TodoItem
  },
  created() {},
  methods: {
    deleted(todo) {
      this.$emit('deleteTodo', todo)
    },
    cleared(todo) {
      this.$emit('clearTodo', todo)
    }
  }
}
</script>

<style lang="scss">
.todo-list {
  background-color: #414446;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px !important;
  padding-right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .todo-container {
    list-style: none;
    width: 48%;
    margin: 1%;
  }
}
</style>
