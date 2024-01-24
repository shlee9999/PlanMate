import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type LikeCommentRequestProps = Pick<CommentType, 'commentId'>

export type LikeCommentResponseProps = boolean

/**댓글 좋아요 */
export const likeComment = ({ commentId }: LikeCommentRequestProps) => axiosPOST('/comment/like', { commentId })
