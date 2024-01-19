import { axiosGET } from 'api/common/commonAxios'
import { PostType } from 'api/types/PostType'

export type FindPostRequestProps = Pick<PostType, 'pages'>

export type FindPostResponseProps = Pick<PostType, 'postDtoList' | 'totalPages'>

/**내 게시물 조회  */
export const findPost = ({ pages }: FindPostRequestProps) => axiosGET('/post/find', { pages })
