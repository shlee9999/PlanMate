import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type CreateReplyRequestProps = Pick<CommentType, 'content' | 'parentCommentId' | 'postId'>

export type CreateReplyResponseProps = boolean

/**답글 생성 */
export const createReply = ({ content, parentCommentId, postId }: CreateReplyRequestProps) =>
  axiosPOST('comment/child/create', { content, parentCommentId, postId })
