import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { CheckPostResponseProps } from 'api/post/checkPost'

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

export interface IAppointment {
  text: string
  startDate: Date
  endDate: Date
  bgColor: string
  id: number
}
