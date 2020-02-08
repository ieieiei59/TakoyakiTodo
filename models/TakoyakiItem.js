import TakoyakiBaseModel from '@/models/TakoyakiBase'
import mock from '@/models/mock/TakoyakiItem'

export default class TakoyakiItem extends TakoyakiBaseModel {
  constructor(json) {
    super(json)
    this.imgURL = json.imgURL
    this.name = json.name
    this.rarity = json.rarity
  }

  getImageURL() {
    return this.imgURL
  }

  static get(id) {
    const json = mock.filter((item) => item.id === id)
    if (json.length > 0) {
      return new TakoyakiItem(json[0])
    } else {
      return null
    }
  }

  static getFailed() {
    const failedId = 2
    return TakoyakiItem.get(failedId)
  }
}
