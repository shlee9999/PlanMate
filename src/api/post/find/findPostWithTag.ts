import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from '../../common/types'

export type FindPostWithTagRequestProps = {
  tagName: string
  pages: number
}

export type FindPostWithTagResponseProps = {
  postDtoList: ResponsePostType[]
  totalPages: number
}

export const findPostWithTag = (req: FindPostWithTagRequestProps): Promise<FindPostWithTagResponseProps> => {
  return axiosGET('/post/find/with', req)
}
