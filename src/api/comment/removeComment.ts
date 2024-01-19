import { axiosDELETE } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type RemoveCommentRequestProps = Pick<CommentType, 'commentId'>

export type RemoveCommentResponseProps = boolean

/**댓글 삭제 */
export const removeComment = ({ commentId }: RemoveCommentRequestProps) => axiosDELETE('/comment/remove', { commentId })
