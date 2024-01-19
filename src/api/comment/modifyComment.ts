import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type ModifyCommentRequestProps = Pick<CommentType, 'commentId' | 'content'>

export type ModifyCommentResponseProps = Pick<
  CommentType,
  'commentId' | 'content' | 'isAuthor' | 'isMyHearted' | 'likeCount' | 'memberName' | 'updatedAt'
>

/**댓글 수정 */
export const modifyComment = ({ commentId, content }: ModifyCommentRequestProps) =>
  axiosPOST('/comment/modify', { commentId, content })
