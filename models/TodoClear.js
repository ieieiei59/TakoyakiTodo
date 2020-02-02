import TakoyakiBaseModel from '@/models/TakoyakiBase'
import TakoyakiItem from '@/models/TakoyakiItem'

export default class TodoClear extends TakoyakiBaseModel {
  static lastId = 0
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
}
