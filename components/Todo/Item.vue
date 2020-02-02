<template>
  <div>
    <div
      :class="{
        'todo-item-container--cleared': todoItem.isCleared
      }"
      class="todo-item-container"
      @click.stop="openTodoModal()"
    >
      <transition enter-active-class="animated pulse">
        <img
          v-if="todoItem.isCleared"
          class="todo-item todo-item--cleared"
          src="~assets/takoyaki_character.png"
          alt="takoyaki"
        />
      </transition>
      <div v-if="!todoItem.isCleared" class="todo-item">
        {{ todoItem.title }}
      </div>
    </div>

    <v-dialog v-model="todoDialog.isActive">
      <v-card v-if="!!todoItem">
        <v-card-title>{{ todoItem.title }}</v-card-title>
        <v-card-text>達成しましたか？</v-card-text>
        <v-card-actions>
          <v-btn @click.stop="todoDialog.isActive = false">閉じる</v-btn>
          <v-spacer />
          <v-btn color="primary" @click.stop="clearTodo()">達成</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Todo from '@@/models/Todo'

export default {
  name: 'TodoItem',
  props: { todoItem: Todo },
  data() {
    return {
      todoDialog: {
        isActive: false
      }
    }
  },
  methods: {
    openTodoModal() {
      if (!this.todoItem.isCleared) {
        this.todoDialog.isActive = true
      }
    },
    clearTodo() {
      this.todoItem.isCleared = true
      this.todoDialog.isActive = false
    }
  }
}
</script>

<style lang="scss">
.todo-item-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #607d8b2b;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(107, 107, 107, 0.15) 70%,
    rgb(255, 255, 255) 100%
  );
  border-radius: 50%;
  width: 100%;
  height: 100%;

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
</style>
