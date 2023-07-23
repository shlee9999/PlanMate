export type TodoPlans = {
  id: string
  title: string
  category: string
  color: string
  day: string
  begin_hour: number
  begin_minute: number
  finish_hour: number
  finish_minute: number
}

export type TodoItems = {
  id: string
  title: string
  category: string
  color: string
  time: number
}
export type TodoItemList = Array<TodoItems>

export type PageInfo = {
  title: string
  url: string
}
