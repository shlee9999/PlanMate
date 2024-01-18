import { axiosPOST } from 'api/common/commonAxios'
import { CommentType } from 'types'

export type FindAllCommentsRequestProps = Pick<CommentType, 'pages' | 'postId'>

export type FindAllCommentsResponseProps = Pick<CommentType, 'commentDtoList' | 'totalCount' | 'totalPages'>

/**해당 게시물 페이지 댓글 찾기 */
export const findAllComments = ({
  pages,
  postId,
}: FindAllCommentsRequestProps): Promise<FindAllCommentsResponseProps> =>
  axiosPOST('/comment/find/all', { pages, postId })
