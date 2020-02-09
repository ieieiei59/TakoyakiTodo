import TakoyakiBaseModel from '@/models/TakoyakiBase'
import TakoyakiItem from '@/models/TakoyakiItem'
import v4 from 'uuid/v4'
import db from '@/models/db/db'

export default class TodoClear extends TakoyakiBaseModel {
  constructor(json) {
    super(json)
    this.todo = json.todo
    this.takoyakiId = json.takoyakiId
    this.setTakoyakiItem()
    TodoClear.lastId = this.id
  }

  setTakoyakiItem() {
    this.takoyakiItem = TakoyakiItem.get(this.takoyakiId)
  }

  getTakoyakiImageURL() {
    return this.takoyakiItem.getImageURL()
  }

  async _save() {
    const saveJson = {
      id: this.id,
      todoId: this.todo.id,
      takoyakiId: this.takoyakiItem.id,
      addedAt: this.addedAt,
      editedAt: this.editedAt
    }
    return db.todoClears.put(saveJson)
  }

  save() {
    return this._save()
  }

  static create(json) {
    json.id = v4()
    json.addedAt = new Date()
    json.editedAt = new Date()

    const todoClear = new TodoClear(json)
    todoClear._save()

    return todoClear
  }

  static async get(id) {
    console.log(id)
    return new TodoClear(await db.todoClears.get(id))
  }
}
