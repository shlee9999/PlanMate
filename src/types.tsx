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
  text: string
  startDate: Date
  endDate: Date
  bgColor: string
  id: number
}
