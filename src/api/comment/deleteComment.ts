import { axiosDELETE } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type DeleteCommentRequestProps = Pick<CommentType, 'commentId'>

export type DeleteCommentResponseProps = boolean

/**댓글 삭제 */
export const deleteComment = ({ commentId }: DeleteCommentRequestProps) => axiosDELETE('/comment', { commentId })
