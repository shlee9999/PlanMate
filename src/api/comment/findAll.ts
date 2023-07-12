import { axiosPOST } from 'api/common/commonAxios'
import { ResponseCommentType } from 'api/common/commonType'

export type FindAllCommentsRequestProps = {
  pages: number
  postId: number
}

export type FindAllCommentsResponseProps = {
  commentDtoList: ResponseCommentType[]
  totalPages: number
}

export const findAllComments = (obj: FindAllCommentsRequestProps) => {
  return axiosPOST('/comment/find/all', obj)
}
