<template>
  <div>
    <v-form v-model="valid">
      <v-text-field
        v-model="TodoData.title"
        label="タイトル"
        placeholder="〇〇を買いに行く"
        :rules="titleRules"
        filled
        rounded
        dense
        required
      ></v-text-field>

      <v-text-field
        v-model="TodoData.description"
        label="説明書き"
        placeholder="△△で、〇〇を◇個買いに行く。"
        :rules="descriptionRules"
        filled
        rounded
        dense
        required
      ></v-text-field>

      <h3>期日</h3>
      <v-date-picker
        locale="ja"
        :allowed-dates="allowedDate"
        v-model="deadlineDate"
        :rules="dateRules"
        color="gray"
        class="ma-2"
        required
      ></v-date-picker>
    </v-form>
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
    },
    setDate() {
      const deadline = this.deadlineDate.split('-')
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
  created() {
    if (this.TodoData.deadline) {
      this.deadlineDate = `${this.TodoData.deadline.getFullYear()}-${this.TodoData.deadline.getMonth() +
        1}-${this.TodoData.deadline.getDate()}`
    } else {
      this.setDate()
    }
  },
  data() {
    const today = new Date()
    const todayDateStr = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()}`
    return {
      today: today,
      deadlineDate: todayDateStr,
      titleRules: [(v) => !!v || '必須項目です。'],
      descriptionRules: [(v) => !!v || '必須項目です。'],
      dateRules: [(v) => !!v || '必須項目です。'],
      valid: false
    }
  },
  watch: {
    deadlineDate(newDate) {
      if (newDate === null) {
        return
      }
      this.setDate()
    },
    valid(newValid) {
      this.$emit('changeValid', newValid)
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
