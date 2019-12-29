<template>
  <div>
    <v-card v-for="todo in todoList" :key="todo.id" class="mb-2">
      <v-card-title>{{ todo.title }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TodoLIst',
  props: [ 'todoList' ],
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>
