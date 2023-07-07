import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from '../../common/commonType'

export type FindPostWithTagRequestProps = {}

export type FindPostWithTagResponseProps = ResponsePostType[]

export const findPostWithTag = (req: FindPostWithTagRequestProps) => {
  return axiosGET('/post/find/with', req)
}
