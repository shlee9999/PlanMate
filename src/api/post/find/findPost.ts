import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from '../../common/commonType'

//내 게시물 조회 api

export type FindPostRequestProps = {}

export type FindPostResponseProps = ResponsePostType[]

export const findPost = (req: FindPostRequestProps) => {
  return axiosGET('/post/find', req)
}
