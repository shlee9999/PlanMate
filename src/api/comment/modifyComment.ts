import { axiosPOST } from 'api/common/commonAxios'

export type ModifyCommentRequestProps = {
  commentId: number
  content: string
}

export type ModifyCommentResponseProps = {
  commentId: number
  content: string
  isAuthor: boolean
  isMyHearted: boolean
  likeCount: number
  memberName: string
  updatedAt: string
}

export const modifyComment = (obj: ModifyCommentRequestProps) => {
  return axiosPOST('/comment/modify', obj)
}
