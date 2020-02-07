const today = new Date()
export default {
  today: new Date(
    new Date(today.setDate(today.getDate())).setHours(0, 0, 0, 0)
  ),
  tomorrow: new Date(
    new Date(today.setDate(today.getDate() + 1)).setHours(23, 59, 59, 999)
  ),
  nextWeek: new Date(
    new Date(today.setDate(today.getDate() + 7)).setHours(23, 59, 59, 999)
  ),
  nextMonth: new Date(
    new Date(today.setMonth((today.getMonth() + 1) % 12)).setHours(
      23,
      59,
      59,
      999
    )
  )
}
