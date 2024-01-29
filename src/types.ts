import { ViewportType } from 'enums'

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

/**{ hour, minute, second } */
export interface TimeProps {
  hour: number
  minute: number
  second?: number
}
/**{ year, month, date } */
export type DateProps = {
  year: number
  month: number
  date: number
}

export type ViewportProps<T> = {
  [key in ViewportType]: T
}
