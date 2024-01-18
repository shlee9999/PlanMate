import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'types'

export type CreateCommentRequestProps = Pick<CommentType, 'content' | 'postId'>

export type CreateCommentResponseProps = Pick<CommentType, 'commentId' | 'content' | 'memberName' | 'updatedAt'>

/**댓글 생성 */
export const createComment = ({ content, postId }: CreateCommentRequestProps) =>
  axiosPOST('/comment/create', { content, postId })
