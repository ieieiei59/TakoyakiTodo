import mTodo from '@/models/mock/Todo'
import TakoyakiBaseModel from '@/models/TakoyakiBase'
import TodoClear from '@/models/TodoClear'

export default class Todo extends TakoyakiBaseModel {
  constructor(json) {
    super(json)
    this.title = json.title
    this.description = json.description
    this.isCleared = json.isCleared
  }

  getAddedAt(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.addedAt, formatStr)
  }

  getEditedAt(formatStr = 'yyyy/mm/dd HH:MM') {
    return this._getDate(this.editedAt, formatStr)
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

  static getList(filter = {}) {
    console.log(filter)
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
