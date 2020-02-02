import dateformat from 'dateformat'

export default class TakoyakiBaseModel {
  constructor(json) {
    this.id = json.id
    this.addedAt = json.addedAt
    this.editedAt = json.addedAt
  }

  _getDate(dateData, formatStr = 'yyyy/mm/dd HH:MM') {
    return dateformat(dateData, formatStr)
  }
}
