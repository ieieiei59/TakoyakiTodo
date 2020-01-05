import mTodo from '@/models/mock/Todo'

export default class Todo {
  constructor(json) {
    this.title = json.title
    this.description = json.description
    this.addedAt = json.addedAt
    this.editedAt = json.addedAt
  }

  static getList(filter = {}) {
    return mTodo.map((v) => new Todo(v))
  }

  static get(id) {
    const filtered = mTodo.filter((v) => v.id === id)
    if (filtered.length < 1) {
      return null
    }
    return new Todo(filtered[0])
  }
}
