<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  props: ['TodoDataProp'],
  model: {
    prop: 'TodoDataProp',
    event: 'todoChanged'
  },
  methods: {
    allowedDate(val) {
      const today = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate()
      )
      return today <= new Date(val)
    }
  },
  created() {
    if (this.TodoData.deadline) {
      this.deadlineDate = `${this.TodoData.deadline.getFullYear()}-${this.TodoData.deadline.getMonth() +
        1}-${this.TodoData.deadline.getDate()}`
    }
  },
  data() {
    return {
      today: new Date(),
      deadlineDate: null
    }
  },
  watch: {
    deadlineDate(newDate) {
      if (newDate === null) {
        return
      }
      const deadline = newDate.split('-')
      this.TodoData.deadline = new Date(
        deadline[0],
        deadline[1] - 1,
        deadline[2],
        23,
        59,
        59,
        999
      )
    }
  },
  computed: {
    TodoData: {
      get() {
        return this.TodoDataProp
      },
      set(value) {
        this.$emit('todoChanged', value)
      }
    }
  }
}
</script>
