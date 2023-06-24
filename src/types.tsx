import { ReactNode } from 'react'

export type TodoItems = {
  id: string
  title: string
  category: string
  color: string
  time: number
}
export type TodoItemList = Array<TodoItems>

export type TabInfo = {
  title: string
  component: ReactNode
  wrapper: string
}

export type Globals = {
  isRunning: boolean
  isStudying: boolean
  todos: Array<TodoItems>
}
