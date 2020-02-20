<template>
  <v-card>
    <v-card-title>ToDoの編集</v-card-title>
    <v-card-text>
      <todo-form v-model="todo"></todo-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="saveBtnClicked()">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import TodoForm from '@/components/Todo/Form'

export default {
  name: 'TodoEditCard',
  data() {
    return {}
  },
  props: ['todoProp'],
  model: {
    prop: 'todoProp',
    event: 'todoChanged'
  },
  created() {
    console.log(this.todoProp)
  },
  components: {
    TodoForm
  },
  computed: {
    todo: {
      get() {
        return this.todoProp
      },
      set(value) {
        this.$emit('todoChanged', value)
      }
    }
  },
  methods: {
    save() {
      return this.todo.save()
    },
    saveBtnClicked() {
      this.save()
      this.$emit('saved')
    }
  }
}
</script>
