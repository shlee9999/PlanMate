import { axiosGET } from 'api/common/commonAxios'

export type LikeCommentRequestProps = {
  commentId: number
}

export type LikeCommentResponseProps = boolean

export const likeComment = (req: LikeCommentRequestProps) => {
  return axiosGET('/comment/like', req)
}
