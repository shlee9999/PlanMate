import { ReactNode } from 'react'

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
