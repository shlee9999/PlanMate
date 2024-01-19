import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type CreateChildCommentRequestProps = Pick<CommentType, 'content' | 'parentCommentId' | 'postId'>

export type CreateChildCommentResponseProps = boolean

/**답글 생성 */
export const createChildComment = ({ content, parentCommentId, postId }: CreateChildCommentRequestProps) =>
  axiosPOST('comment/child/create', { content, parentCommentId, postId })
