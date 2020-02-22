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

  async clear() {
    const clearData = {
      todo: this,
      takoyakiId: 1
    }
    this.clearObj = TodoClear.create(clearData)
    this.clearId = this.clearObj.id
    this.clearedAt = new Date()
    this.isCleared = true

    await this._save()
    return this
  }

  getTakoyakiImageURL() {
    if (this.isCleared) {
      return this.clearObj.getTakoyakiImageURL()
    } else {
      return ''
    }
  }

  isFailed() {
    return this.deadline < new Date() && !this.isCleared
  }

  isClearedOrFailed() {
    return this.isFailed() || this.isCleared
  }

  save() {
    return this._save()
  }

  isDaily() {
    return utilDate.today <= this.deadline && this.deadline < utilDate.tomorrow
  }

  isWeekly() {
    return (
      utilDate.tomorrow <= this.deadline && this.deadline < utilDate.nextWeek
    )
  }

  isMonthly() {
    return (
      utilDate.nextWeek <= this.deadline && this.deadline < utilDate.nextMonth
    )
  }

  getRemainingDays() {
    if (this.isClearedOrFailed()) {
      return 0
    } else {
      return this.deadline.getDate() - utilDate.today.getDate() + 1
    }
  }

  async delete() {
    return await db.todos.delete(this.id)
  }

  async _save() {
    const toSaveJson = {
      id: this.id,
      clearId: this.clearId,
      title: this.title,
      description: this.description,
      isCleared: this.isCleared,
      deadline: this.deadline,
      addedAt: this.addedAt,
      editedAt: this.editedAt
    }

    return await db.todos.put(toSaveJson)
  }

  async loadClearData() {
    console.log('loadClearData: ', this)
    if (this.isCleared) {
      this.clearObj = await TodoClear.get(this.clearId)
    }
    return this
  }

  static async getList(filter = {}) {
    const defaultFilter = {
      offset: 0,
      limit: 200,
      daily: false,
      weekly: false,
      monthly: false
    }

    for (let key in defaultFilter) {
      if (!filter[key]) {
        filter[key] = defaultFilter[key]
      }
    }

    const today = utilDate.today
    const tomorrow = utilDate.tomorrow
    const nextWeek = utilDate.nextWeek
    const nextMonth = utilDate.nextMonth

    let todos = db.todos

    if (filter.daily) {
      todos = todos.where('deadline').between(today, tomorrow, true, true)
    } else if (filter.weekly) {
      todos = todos.where('deadline').between(today, nextWeek, true, true)
    } else if (filter.monthly) {
      todos = todos.where('deadline').between(today, nextMonth, true, true)
    } else {
      todos = todos.toCollection()
    }

    todos = todos.offset(filter.offset).limit(filter.limit)

    todos = await todos.sortBy('addedAt')

    todos = todos.map((todo) => new Todo(todo, 'load'))

    todos = todos.map((todo) => todo.loadClearData())
    return await Promise.all(todos)
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
    const todo = Todo.create(json)
    todo._save()
    return todo
  }

  static create(json) {
    json.addedAt = new Date()
    json.editedAt = new Date()
    json.id = v4()
    json.isCleared = false
    json.crearId = null

    return new Todo(json, 'add')
  }

  static blankCreate() {
    const json = {
      title: '',
      description: '',
      deadline: null
    }

    return Todo.create(json)
  }
}
