import { axiosGET } from 'api/common/commonAxios'
import { PostType } from 'api/types/PostType'

export type FindAllPostRequestProps = Pick<PostType, 'pages'>

export type FindAllPostResponseProps = Pick<PostType, 'postDtoList' | 'totalPages'>

/**게시물 조회 */
export const findAll = ({ pages }: FindAllPostRequestProps): Promise<FindAllPostResponseProps> =>
  axiosGET('post/find/all', { pages })
