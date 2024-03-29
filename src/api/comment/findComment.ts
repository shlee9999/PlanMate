import { axiosGET } from 'api/common/commonAxios'
import { CommentType } from 'api/types'

export type FindCommentRequestProps = Pick<CommentType, 'pages'>

export type FindCommentResponseProps = Pick<CommentType, 'commentDtoList' | 'totalPages'>

/**자신이 작성한 댓글 찾기 */
export const findComment = ({ pages }: FindCommentRequestProps): Promise<FindCommentResponseProps> =>
  axiosGET('/comment/find/', { pages })
