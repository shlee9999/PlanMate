import { ReactNode } from 'react'

export type TodoPlans = {
  id: string
  title: string
  category: string
  color: string
  day: string
  beginhour: number
  beginminute: number
  finishhour: number
  finishminute: number
}

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
}
