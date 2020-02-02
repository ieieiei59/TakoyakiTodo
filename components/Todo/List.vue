<template>
  <div>
    <ul class="todo-list">
      <li
        v-for="todo in todoList"
        :key="todo.id"
        :class="{
          'todo-item-container--cleared': todo.isCleared
        }"
        class="todo-item-container"
        @click.stop="openTodoModal(todo)"
      >
        <transition enter-active-class="animated pulse">
          <img
            v-if="todo.isCleared"
            class="todo-item todo-item--cleared"
            src="~assets/takoyaki_character.png"
            alt="takoyaki"
          />
        </transition>
        <div v-if="!todo.isCleared" class="todo-item">
          {{ todo.title }}
        </div>
      </li>
    </ul>

    <v-dialog v-model="todoDialog.isActive">
      <v-card v-if="!!todoDialog.todoObj">
        <v-card-title>{{ todoDialog.todoObj.title }}</v-card-title>
        <v-card-text>達成しましたか？</v-card-text>
        <v-card-actions>
          <v-btn @click.stop="todoDialog.isActive = false">閉じる</v-btn>
          <v-spacer />
          <v-btn color="primary" @click.stop="clearTodo(todoDialog.todoObj)"
            >達成</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'TodoLIst',
  props: { todoList: Array },
  data() {
    return {
      todoDialog: {
        todoObj: null,
        isActive: false
      }
    }
  },
  created() {},
  methods: {
    openTodoModal(todo) {
      if (!todo.isCleared) {
        this.todoDialog.todoObj = todo
        this.todoDialog.isActive = true
      }
    },
    clearTodo(todo) {
      todo.isCleared = true
      this.todoDialog.isActive = false
    }
  }
}
</script>

<style lang="scss">
.todo-list {
  background-color: #414446;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px !important;
  padding-right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .todo-item-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    width: 48%;
    margin: 1%;
    background-color: #607d8b2b;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(107, 107, 107, 0.15) 70%,
      rgb(255, 255, 255) 100%
    );
    border-radius: 50%;

    &::before {
      display: block;
      width: 0%;
      padding-bottom: 100%;
      content: '';
    }
    &:hover {
      box-shadow: 0px 0px 39px -11px #113d55;
    }
    &--cleared {
      // background-image: url('~assets/takoyaki_character.png');
      // background-size: contain;
      border-radius: 50%;
    }

    .todo-item {
      &--cleared {
        // background-color: rgba(0, 0, 0, 0.4);
        color: white;
        text-shadow: 0px 0px 14px #e7e8bc;
        width: 100%;
      }
    }
  }
}
</style>
