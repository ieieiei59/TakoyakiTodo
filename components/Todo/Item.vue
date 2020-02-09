<template>
  <div>
    <div
      :class="{
        'todo-item-container--cleared': todoItem.isCleared
      }"
      class="todo-item-container"
      @click.stop="openTodoModal()"
    >
      <div class="todo-item">
        <h3
          :class="
            todoItem.isClearedOrFailed()
              ? 'todo-item__text--cleared'
              : 'todo-item__text'
          "
        >
          {{ todoItem.title }}
        </h3>
      </div>
      <transition enter-active-class="animated pulse">
        <img
          v-if="todoItem.isCleared"
          class="todo-item todo-item--cleared"
          :src="todoItem.getTakoyakiImageURL()"
          alt="takoyaki"
        />
        <img
          :src="failedTakoyaki.getImageURL()"
          :alt="failedTakoyaki.name"
          class="todo-item todo-item--cleared"
          v-if="todoItem.isFailed()"
        />
      </transition>
    </div>
    <div class="todo-item__ex-text pa-2 mt-1">
      <p class="mb-0">{{ todoItem.description }}</p>
    </div>

    <v-dialog v-model="todoDialog.isActive">
      <v-card v-if="!!todoItem">
        <v-card-title>{{ todoItem.title }}</v-card-title>
        <v-card-text>
          <p>{{ todoItem.description }}</p>
          <p><span>期日: </span>{{ todoItem.getDeadline() }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click.stop="todoDialog.isActive = false">閉じる</v-btn>
          <v-spacer />
          <v-btn color="red" @click.stop="deleteTodo()">削除</v-btn>
          <v-btn
            color="primary"
            @click.stop="clearTodo()"
            :disabled="todoItem.isClearedOrFailed()"
            >{{ clearButtonText }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Todo from '@@/models/Todo'
import TakoyakiItem from '@@/models/TakoyakiItem'

export default {
  name: 'TodoItem',
  props: { todoItem: Todo },
  data() {
    return {
      todoDialog: {
        isActive: false
      },
      failedTakoyaki: TakoyakiItem.getFailed()
    }
  },
  methods: {
    openTodoModal() {
      this.todoDialog.isActive = true
    },
    clearTodo() {
      this.todoDialog.isActive = false
      this.todoItem.clear()
    },
    deleteTodo() {
      this.todoDialog.isActive = false
      this.todoItem.delete()
      this.$emit('deleted', this.todoItem)
    }
  },
  computed: {
    clearButtonText() {
      if (this.todoItem.isCleared) {
        return '達成済み'
      } else if (this.todoItem.isFailed()) {
        return '達成失敗'
      } else {
        return '達成'
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese');

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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__text {
      font-family: 'Kosugi Maru', sans-serif;
      &--cleared {
        font-family: 'Kosugi Maru', sans-serif;
        z-index: 1;
        background-color: rgba(107, 107, 107, 0.5);
      }
    }
    &--cleared {
      // background-color: rgba(0, 0, 0, 0.4);
      color: white;
      text-shadow: 0px 0px 14px #e7e8bc;
      width: 100%;
    }
  }
}

.todo-item__ex-text {
  font-family: 'Kosugi Maru', sans-serif;

  background-color: rgba(107, 107, 107, 0.15);
}
</style>
