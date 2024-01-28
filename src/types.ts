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
export interface TimeProps {
  hour: number
  minute: number
  second?: number
}
export type DateProps = {
  year: number
  month: number
  date: number
}

export type ViewportType = 'XLARGE' | 'LARGE' | 'MEDIUM' | 'SMALL'

export type ViewportProps<T> = {
  [key in ViewportType]: T
}
