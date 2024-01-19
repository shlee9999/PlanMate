import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from '../../common/types'

//내 게시물 조회 api

export type FindPostRequestProps = {
  pages: number
}

export type FindPostResponseProps = {
  postDtoList: ResponsePostType[]
  totalPages: number
}

export const findPost = (req: FindPostRequestProps) => {
  return axiosGET('/post/find', req)
}
