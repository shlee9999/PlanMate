//스크랩한 게시물 조회

import { axiosGET } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type FindScrappedPostRequestProps = Pick<PostType, 'pages'>

export type FindScrappedPostResponseProps = Pick<PostType, 'postDtoList' | 'totalPages'>

/**내가 스크랩한 게시물 조회 */
export const findScrappedPost = ({ pages }: FindScrappedPostRequestProps): Promise<FindScrappedPostResponseProps> =>
  axiosGET('/post/find/scrap', { pages })
