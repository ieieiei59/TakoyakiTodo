<template>
  <v-card>
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-text>{{ todo.description }}</v-card-text>
    <v-card-text>追加日時: {{ todo.getAddedAt() }}</v-card-text>
    <v-card-text>編集日時: {{ todo.getEditedAt() }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TodoDetail',
  props: ['todo']
}
</script>
