<template>
  <div>
    <todo-detail :todo="todo"></todo-detail>
  </div>
</template>

<script>
import Todo from '@/models/Todo'
import TodoDetail from '@/components/Todo/Detail'

export default {
  name: 'TodoDetailPage',
  components: {
    TodoDetail
  },
  data() {
    return {
      todo: null
    }
  },
  created() {
    this.todo = Todo.get(this.$route.params.id)
  }
}
</script>
