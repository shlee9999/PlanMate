import { axiosGET } from 'api/common/commonAxios'
import { PostType } from 'api/types/PostType'

export type FindPostWithTagRequestProps = Pick<PostType, 'tagName' | 'pages'>

export type FindPostWithTagResponseProps = Pick<PostType, 'postDtoList' | 'totalPages'>

/**태그 필터링하여 10개씩 조회 */
export const findPostWithTag = ({
  tagName,
  pages,
}: FindPostWithTagRequestProps): Promise<FindPostWithTagResponseProps> =>
  axiosGET('/post/find/with', { tagName, pages })
