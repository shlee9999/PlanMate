import { axiosGET } from 'api/common/commonAxios'
import { ResponseCommentType } from 'api/common/commonType'

export type FindCommentRequestProps = {
  pages: number
}

export type FindCommentResponseProps = {
  commentDtoList: ResponseCommentType[]
  totalPages: number
}

export const findComment = (req: FindCommentRequestProps) => {
  return axiosGET('/comment/find/', req)
}
