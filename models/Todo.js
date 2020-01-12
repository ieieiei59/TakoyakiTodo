import dateformat from 'dateformat'
import mTodo from '@/models/mock/Todo'

export default class Todo {
  constructor(json) {
    this.id = json.id
    this.title = json.title
    this.description = json.description
    this.addedAt = json.addedAt
    this.editedAt = json.addedAt
    this.isCleared = json.isCleared
  }

  _getDate(dateData, formatStr = 'yyyy/mm/dd HH:MM') {
    return dateformat(dateData, formatStr)
  }

  getAddedAt(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.addedAt, formatStr)
  }

  getEditedAt(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.editedAt, formatStr)
  }

  static getList(filter = {}) {
    return mTodo.map((v) => new Todo(v))
  }

  static get(id) {
    const filtered = mTodo.filter((v) => v.id === Number(id))
    if (filtered.length < 1) {
      return null
    }
    return new Todo(filtered[0])
  }
}
