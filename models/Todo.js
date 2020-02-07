import mTodo from '@/models/mock/Todo'
import TakoyakiBaseModel from '@/models/TakoyakiBase'
import TodoClear from '@/models/TodoClear'
import db from '@/models/db/db'
import v4 from 'uuid/v4'
import utilDate from '@/utils/Date'

export default class Todo extends TakoyakiBaseModel {
  constructor(json, type = 'add') {
    super(json)
    this.title = json.title
    this.description = json.description
    this.deadline = json.deadline

    switch (type) {
      case 'add':
        this.isCleared = false
        this.clearId = null
        this.clearedAt = null
        break

      case 'load':
        this.isCleared = json.isCleared
        this.clearId = json.clearId
        this.clearedAt = json.clearedAt
        break
    }
  }

  getAddedAt(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.addedAt, formatStr)
  }

  getEditedAt(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.editedAt, formatStr)
  }

  getDeadline(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.deadline, formatStr)
  }

  clear() {
    const clearData = {
      id: TodoClear.lastId + 1,
      todo: this,
      takoyakiId: 1
    }
    this.clearObj = new TodoClear(clearData)
    this.isCleared = true
  }

  getTakoyakiImageURL() {
    if (this.isCleared) {
      return this.clearObj.getTakoyakiImageURL()
    } else {
      return ''
    }
  }

  async _save() {
    const toSaveJson = {
      id: this.id,
      clearedId: this.clearedId,
      title: this.title,
      description: this.description,
      isCleared: this.isCleared,
      deadline: this.deadline,
      addedAt: this.addedAt,
      editedAt: this.editedAt
    }

    return await db.todos.put(toSaveJson)
  }

  static async getList(filter = {}) {
    const defaultFilter = {
      offset: 0,
      limit: 20,
      daily: false,
      weekly: false,
      monthly: false
    }

    for (let key in defaultFilter) {
      if (!filter[key]) {
        filter[key] = defaultFilter[key]
      }
    }

    console.log(filter)
    const today = utilDate.today
    const tomorrow = utilDate.tomorrow
    const nextWeek = utilDate.nextWeek
    const nextMonth = utilDate.nextMonth
    console.log(today)
    console.log(tomorrow)
    console.log(nextWeek)
    console.log(nextMonth)

    let todos = db.todos

    if (filter.daily) {
      console.log(filter.daily)
      todos = todos.where('deadline').between(today, tomorrow, true, true)
      console.log(todos)
    } else if (filter.weekly) {
      todos = todos.where('deadline').between(today, nextWeek, true, true)
      console.log('weekly')
    } else if (filter.monthly) {
      todos = todos.where('deadline').between(today, nextMonth, true, true)
      console.log('monthly')
    } else {
      todos = todos.toCollection()
    }

    const _todos = todos
    _todos.each((todo) => {
      console.log(today, todo.deadline)
      console.log(today.getTime(), todo.deadline.getTime())
      console.log(today.getTime() < todo.deadline.getTime())
      console.log('---------------------')
    })

    todos = todos.offset(filter.offset).limit(filter.limit)

    todos = await todos.sortBy('addedAt')

    console.log(todos)

    return todos.map((todo) => new Todo(todo))
  }

  static get(id) {
    const filtered = mTodo.filter((v) => v.id === Number(id))
    if (filtered.length < 1) {
      return null
    }
    return new Todo(filtered[0])
  }

  /**
   * Todoを追加する
   *
   * @param {json} json
   *
   * {
   *   title: タイトル(String),
   *   description: 説明書き(String),
   *   deadline: 期日(Date)}
   */
  static add(json) {
    json.addedAt = new Date()
    json.editedAt = new Date()
    json.id = v4()
    json.isCleared = false
    json.crearId = null

    const todo = new Todo(json, 'add')
    todo._save()
    return todo
  }
}
