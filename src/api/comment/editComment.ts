import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type EditCommentRequestProps = Pick<CommentType, 'commentId' | 'content'>

export type EditCommentResponseProps = Pick<
  CommentType,
  'commentId' | 'content' | 'isAuthor' | 'isMyHearted' | 'likeCount' | 'memberName' | 'updatedAt'
>

/**댓글 수정 */
export const editComment = ({ commentId, content }: EditCommentRequestProps) =>
  axiosPOST('/comment/edit', { commentId, content })
