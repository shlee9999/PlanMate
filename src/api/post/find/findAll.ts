import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/common/commonType'

export type FindAllPostRequestProps = {
  pages: number
}

export type FindAllPostResponseProps = {
  postDtoList: ResponsePostType[]
  totalPages: number
}

export const findAll = (req: FindAllPostRequestProps): Promise<FindAllPostResponseProps> => {
  return axiosGET('post/find/all', req)
}
