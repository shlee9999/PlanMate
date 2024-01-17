export type TodoItemType = {
  colorHex: string
  name: string
  subjectId: number
  time: number
}

export type PageInfo = {
  title: string
  url: string
}

export interface IAppointment {
  scheduleName: string
  startAt: string
  endAt: string
  colorHex: string
  plannerId: number
  day: string
}

export interface TimeProps {
  hour: number
  minute: number
  second?: number
}
