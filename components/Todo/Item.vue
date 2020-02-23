<template>
  <div>
    <div
      :class="{
        'todo-item-container--cleared': todoItem.isCleared
      }"
      class="todo-item-container"
      @click.stop="openTodoModal()"
    >
      <!-- <div class="todo-item-title">
        <h3
          :class="
            todoItem.isClearedOrFailed()
              ? 'todo-item__text--cleared'
              : 'todo-item__text'
          "
        >
          {{ todoItem.title }}
        </h3>
        <h4 v-if="!todoItem.isClearedOrFailed()">
          [残り: {{ todoItem.getRemainingDays() }}日]
        </h4>
      </div> -->
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
      <p
        class="todo-item__ex-text-title mb-0 subtitle-1 text-center text-no-wrap text-truncate"
      >
        {{ todoItem.title }}
      </p>
      <span class="mb-0 overline text-righ text--disabled">
        [残り: {{ todoItem.getRemainingDays() }}日]
      </span>
      <v-clamp
        autoresize
        :max-lines="2"
        ellipsis="..."
        class="todo-item__ex-text-description mb-0 caption"
      >
        {{ todoItem.description }}
      </v-clamp>
    </div>

    <v-dialog v-model="todoDialog.isActive">
      <v-card v-if="!!todoItem">
        <v-card-title>{{ todoItem.title }}</v-card-title>
        <v-card-text>
          <p>{{ todoItem.description }}</p>
          <p><span>期日: </span>{{ todoItem.getDeadline() }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click.stop="clearTodo()"
            :disabled="todoItem.isClearedOrFailed()"
            >{{ clearButtonText }}</v-btn
          >
          <v-btn color="orange" @click.stop="editTodo()">編集</v-btn>
          <v-btn @click.stop="todoDialog.isActive = false">閉じる</v-btn>
          <v-spacer />
          <v-btn color="red" @click.stop="deleteTodo()">削除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editCard.isActive">
      <edit-card
        v-if="!!todoItem"
        v-model="todoItem"
        @saved="editCard.isActive = false"
      ></edit-card>
    </v-dialog>
  </div>
</template>

<script>
import Todo from '@@/models/Todo'
import TakoyakiItem from '@@/models/TakoyakiItem'
import EditCard from '@/components/Todo/EditCard'
import VClamp from 'vue-clamp'

export default {
  name: 'TodoItem',
  props: { todoItem: Todo },
  created() {
    console.log(this)
  },
  data() {
    return {
      todoDialog: {
        isActive: false
      },
      editCard: {
        isActive: false
      },
      failedTakoyaki: TakoyakiItem.getFailed()
    }
  },
  components: {
    EditCard,
    VClamp
  },
  methods: {
    openTodoModal() {
      this.todoDialog.isActive = true
    },
    clearTodo() {
      this.todoDialog.isActive = false
      this.todoItem.clear()
      this.$emit('cleared', this.todoItem)
    },
    deleteTodo() {
      this.todoDialog.isActive = false
      this.todoItem.delete()
      this.$emit('deleted', this.todoItem)
    },
    editTodo() {
      this.todoDialog.isActive = false
      console.log(this.todoItem)
      this.editCard.isActive = true
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
    flex-direction: column;
    &-title {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: auto;
    }
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
  $background-color: rgb(72, 72, 72);
  font-family: 'Kosugi Maru', sans-serif;

  background-color: $background-color;

  &-description {
    overflow: hidden;
    max-height: 2.5rem;
  }
}
</style>
