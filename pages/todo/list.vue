<template>
  <div>
    <div class="pa-2 mb-2">
      <v-row>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="addCardDialog = true">追加</v-btn>
      </v-row>
    </div>

    <v-card>
      <v-tabs
        v-model="currentTab"
        fixed-tabs
        slider-color="white"
        color="white"
        show-arrows
        center-active
        min-width="200px"
      >
        <v-tab
          v-for="item in todoTypes"
          :key="item.key"
          :href="`#tab-${item.key}`"
          style="white-space:nowrap;"
          >{{ item.title }}</v-tab
        >
      </v-tabs>
    </v-card>
    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="type in todoTypes"
        :key="`todoList-${type.key}`"
        :value="`tab-${type.key}`"
      >
        <list-component
          :todoList="todoLists[type.key]"
          @deleteTodo="deleteTodo"
          @clearTodo="clearTodo"
        ></list-component>
      </v-tab-item>
    </v-tabs-items>

    <v-dialog v-model="addCardDialog">
      <todo-add-card @added="todoAdded"></todo-add-card>
    </v-dialog>
  </div>
</template>

<script>
import ListComponent from '@/components/Todo/List'
import TodoAddCard from '@/components/Todo/AddCard'
import Todo from '@/models/Todo'

export default {
  name: 'TodoListPage',
  components: {
    ListComponent,
    TodoAddCard
  },
  data() {
    return {
      todoList: [],
      todoLists: {
        daily: [],
        weekly: [],
        monthly: [],
        cleared: [],
        failed: []
      },
      todoTypes: [
        { key: 'daily', title: '今日中', todoFilter: (todo) => todo.isDaily() },
        {
          key: 'weekly',
          title: '今週中',
          todoFilter: (todo) => todo.isWeekly()
        },
        {
          key: 'monthly',
          title: '今月中',
          todoFilter: (todo) => todo.isMonthly()
        },
        {
          key: 'cleared',
          title: '達成済み',
          todoFilter: (todo) => todo.isCleared
        },
        {
          key: 'failed',
          title: '期限切れ',
          todoFilter: (todo) => todo.isFailed()
        }
      ],
      currentTab: 'tab-daily',
      addCardDialog: false
    }
  },
  created() {
    this.setTodoList()
  },
  methods: {
    async setTodoList() {
      const filter = {}
      this.todoList = await Todo.getList(filter)
      this.assignTodoLists()
    },
    assignTodoLists() {
      for (let type of this.todoTypes) {
        const list = this.todoList.filter(type.todoFilter)
        const cleared = list.filter((todo) => todo.isCleared)
        const notCleared = list.filter((todo) => !todo.isCleared)
        cleared.sort((a, b) => {
          if (a.addedAt < b.addedAt) {
            return 1
          }
          return -1
        })
        notCleared.sort((a, b) => {
          if (a.addedAt < b.addedAt) {
            return 1
          }
          return -1
        })
        this.todoLists[type.key] = [...notCleared, ...cleared]
      }
    },
    todoAdded() {
      this.addCardDialog = false
      this.setTodoList()
    },
    deleteTodo(todo) {
      this.todoList = this.todoList.filter((_todo) => _todo.id !== todo.id)
      this.assignTodoLists()
    },
    clearTodo() {
      this.assignTodoLists()
    }
  }
}
</script>
