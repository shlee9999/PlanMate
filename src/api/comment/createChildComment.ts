import { axiosPOST } from 'api/common/commonAxios'
import { CommentType, ResponseCommentType } from 'api/types'

export type CreateReplyRequestProps = Pick<CommentType, 'content' | 'parentCommentId' | 'postId'>

export type CreateReplyResponseProps = ResponseCommentType

/**답글 생성 */
export const createReply = ({
  content,
  parentCommentId,
  postId,
}: CreateReplyRequestProps): Promise<CreateReplyResponseProps> =>
  axiosPOST('comment/child/create', { content, parentCommentId, postId })
