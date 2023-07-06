import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/common/commonType'

export type FindAllRequestProps = {
  pages: number
}

export type FindAllResponseProps = ResponsePostType

export const findAll = (req: FindAllRequestProps) => {
  return axiosGET('post/find/all', req)
}
