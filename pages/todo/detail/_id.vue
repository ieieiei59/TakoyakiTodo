<template>
  <div />
</template>

<script>
import Todo from '@/models/Todo'

export default {
  name: 'TodoDetailPage',

  data() {
    return {
      todo: null
    }
  },
  created() {
    this.todo = Todo.get(this.$route.params.id)
    console.log(this.todo)
  }
}
</script>
