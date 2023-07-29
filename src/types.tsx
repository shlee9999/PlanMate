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
