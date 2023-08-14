import { axiosPOST } from 'api/common/commonAxios'

export type CreateChildCommentRequestProps = {
  content: string
  parentCommentId: number
  postId: number
}

export type CreateChildCommentResponseProps = boolean

export const createChildComment = (req: CreateChildCommentRequestProps) => {
  return axiosPOST('comment/child/create', req)
}
