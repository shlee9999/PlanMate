import { axiosPOST } from 'api/common/commonAxios'
import { ResponseCommentType } from 'api/types'
import { CommentType } from 'api/types'

export type FindAllChildRequestProps = Pick<CommentType, 'parentCommentId' | 'postId'>

export type FindAllChildResponseProps = ResponseCommentType[]



/**해당 댓글의 답글 모두 찾기 */
export const findAllChild = ({
  parentCommentId,
  postId,
}: FindAllChildRequestProps): Promise<FindAllChildResponseProps> =>
  axiosPOST('/comment/child/recent', { parentCommentId, postId })
