import { axiosPOST } from 'api/common/commonAxios'

export type CreateCommentRequestProps = {
  content: string
  postId: number
}

export type CreateCommentResponseProps = {
  content: string
  isAuthor: boolean
  likeCount: number
  memberName: string
  updatedAt: string
}

export const createComment = (obj: CreateCommentRequestProps) => {
  return axiosPOST('/comment/create', obj)
}
