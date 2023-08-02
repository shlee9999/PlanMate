import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from '../../common/commonType'

export type FindPostWithTagRequestProps = {
  tagName: string
  pages: number
}

export type FindPostWithTagResponseProps = {
  postDtoList: ResponsePostType[]
  totalPages: number
}

export const findPostWithTag = (req: FindPostWithTagRequestProps) => {
  return axiosGET('/post/find/with', req)
}
