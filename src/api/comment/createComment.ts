import { axiosPOST } from 'api/common/commonAxios'

export type CreateCommentRequestProps = {
  content: string
  postId: number
}

export type CreateCommentResponseProps = {
  commentId: number
  content: string
  memberName: string
  updatedAt: string
}

export const createComment = (obj: CreateCommentRequestProps) => {
  return axiosPOST('/comment/create', obj)
}
