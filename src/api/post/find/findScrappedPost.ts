//스크랩한 게시물 조회

import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from '../../common/commonType'

export type FindScrappedPostRequestProps = {
  pages: number
}

export type FindScrappedPostResponseProps = ResponsePostType[]

export const findScrappedPost = (req: FindScrappedPostRequestProps) => {
  return axiosGET('/post/find/scrap', req)
}
