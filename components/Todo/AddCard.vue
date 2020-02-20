<template>
  <v-card>
    <v-card-title>ToDoの追加</v-card-title>
    <v-card-text>
      <todo-form v-model="newTodo" ref="todoForm"></todo-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="addBtnClicked()">追加</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Todo from '@/models/Todo'
import TodoForm from '@/components/Todo/Form'

export default {
  name: 'TodoAddCard',
  data() {
    return {
      newTodo: Todo.blankCreate()
    }
  },
  created() {},
  components: {
    TodoForm
  },
  methods: {
    addBtnClicked() {
      this.newTodo.save()
      this.$emit('added', this.newTodo)

      this.$refs.todoForm.deadlineDate = null
      this.newTodo = Todo.blankCreate()
    }
  }
}
</script>
