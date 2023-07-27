import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { CheckPostResponseProps } from 'api/post/checkPost'

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
  subjectId: number
  name: string
  type: string
  colorHex: string
  startAt: string
  endAt: string
} //time은 파싱

export type TodoItemList = Array<TodoItems>

export type PageInfo = {
  title: string
  url: string
}

export type ExamInfoDetailDataType = {
  checkPostResult: CheckPostResponseProps
  findAllCommentsResult: FindAllCommentsResponseProps
}
