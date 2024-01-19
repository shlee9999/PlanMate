//스크랩한 게시물 조회

import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/types'
import { PostType } from 'api/types/PostType'

export type FindScrappedPostRequestProps = Pick<PostType, 'pages'>

export type FindScrappedPostResponseProps = ResponsePostType[]

/**내가 스크랩한 게시물 조회 */
export const findScrappedPost = ({ pages }: FindScrappedPostRequestProps) => axiosGET('/post/find/scrap', { pages })
