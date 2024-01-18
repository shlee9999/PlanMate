import { axiosGET } from 'api/common/commonAxios'
import { CommentType } from 'types'

export type FindCommentRequestProps = Pick<CommentType, 'pages'>

export type FindCommentResponseProps = Pick<CommentType, 'commentDtoList' | 'totalPages'>

/**자신이 작성한 댓글 찾기 */
export const findComment = ({ pages }: FindCommentRequestProps) => axiosGET('/comment/find/', { pages })
