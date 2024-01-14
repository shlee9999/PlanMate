export type TodoItemType = {
  subjectId: number
  name: string
  colorHex: string
  time: number
  startAt?: string
  endAt?: string
} //time은 파싱

export type PageInfo = {
  title: string
  url: string
}

export interface IAppointment {
  scheduleName: string
  startDate: Date
  endDate: Date
  colorHex: string
  id: string
  day: string
}
