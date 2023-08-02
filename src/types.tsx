import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { CheckPostResponseProps } from 'api/post/checkPost'

export type TodoPlans = {
  id: string
  title: string
  // category: string
  color: string
  day: string
  begin_hour: number
  begin_minute: number
  finish_hour: number
  finish_minute: number
}

export type TodoPlanList = Array<TodoPlans>

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

export type ExamInfoDetailDataType = {
  checkPostResult: CheckPostResponseProps
  findAllCommentsResult: FindAllCommentsResponseProps
}
