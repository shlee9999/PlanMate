import { axiosGET } from 'api/common/commonAxios'
import { CommentType } from 'types'

export type LikeCommentRequestProps = Pick<CommentType, 'commentId'>

export type LikeCommentResponseProps = boolean

/**댓글 좋아요 */
export const likeComment = ({ commentId }: LikeCommentRequestProps) => axiosGET('/comment/like', { commentId })
