<template>
  <div>
    <v-btn @click="addCardDialog = true">追加</v-btn>
    <list-component :todoList="todoList" />

    <v-dialog v-model="addCardDialog">
      <todo-add-card @added="addCardDialog = false"></todo-add-card>
    </v-dialog>
  </div>
</template>

<script>
import ListComponent from '@/components/Todo/List'
import TodoAddCard from '@/components/Todo/AddCard'
import Todo from '@/models/Todo'

export default {
  name: 'TodoListPage',
  components: {
    ListComponent,
    TodoAddCard
  },
  data() {
    return {
      todoList: [],
      addCardDialog: false
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
