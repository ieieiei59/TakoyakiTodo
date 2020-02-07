<template>
  <div>
    <div class="pa-2 mb-2">
      <v-row>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="addCardDialog = true">追加</v-btn>
      </v-row>
    </div>
    <list-component :todoList="todoList" />

    <v-dialog v-model="addCardDialog">
      <todo-add-card @added="todoAdded"></todo-add-card>
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
    this.setTodoList()
  },
  methods: {
    async setTodoList() {
      const filter = {}
      this.todoList = await Todo.getList(filter)
    },
    todoAdded() {
      this.addCardDialog = false
      this.setTodoList()
    }
  }
}
</script>
