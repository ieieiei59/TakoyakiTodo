<template>
  <div>
    <todo-card
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      class="mb-2"
    />
  </div>
</template>

<script>
import TodoCard from '@/components/Todo/Card'
export default {
  name: 'TodoLIst',
  components: {
    TodoCard
  },
  props: ['todoList'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
