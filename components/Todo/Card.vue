<template>
  <v-card :to="detailLink">
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-text>{{ todo.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TodoCard',
  props: ['todo'],
  computed: {
    detailLink () {
      return `/todo/detail/${this.todo.id}`
    }
  }
}
</script>
