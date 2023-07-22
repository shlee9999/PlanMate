import { axiosDELETE } from 'api/common/commonAxios'

export type RemoveCommentRequestProps = {
  commentId: number
}

export type RemoveCommentResponseProps = boolean

export const removeComment = (req: RemoveCommentRequestProps) => {
  return axiosDELETE('/comment/remove', req)
}
