<template>
  <v-card>
    <v-card-title>ToDoの追加</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="TodoData.title"
        label="タイトル"
        placeholder="〇〇を買いに行く"
        filled
        rounded
        dense
      ></v-text-field>

      <v-text-field
        v-model="TodoData.description"
        label="説明書き"
        placeholder="△△で、〇〇を◇個買いに行く。"
        filled
        rounded
        dense
      ></v-text-field>
      <h3>期日</h3>
      <v-date-picker
        locale="ja"
        :allowed-dates="allowedDate"
        v-model="deadlineDate"
        color="gray"
        class="ma-2"
      ></v-date-picker>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="addBtnClicked()">追加</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Todo from '@/models/Todo'

export default {
  name: 'TodoAddCard',
  data() {
    return {
      TodoData: {
        title: '',
        description: '',
        deadline: null
      },
      today: new Date(),
      deadlineDate: null
    }
  },
  created() {},
  methods: {
    add() {
      if (this.TodoData.deadline === null) {
        const deadline = this.deadlineDate.split('-')
        this.TodoData.deadline = new Date(
          deadline[0],
          deadline[1],
          deadline[2],
          23,
          59,
          59,
          999
        )
      }
      return Todo.add(this.TodoData)
    },
    allowedDate(val) {
      const today = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate()
      )
      return today <= new Date(val)
    },
    addBtnClicked() {
      console.log('addBtnClicked')
      const todo = this.add()
      console.log('addedTodo: ', todo)
      this.$emit('added', todo)
    }
  }
}
</script>
