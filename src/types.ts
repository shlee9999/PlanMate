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
