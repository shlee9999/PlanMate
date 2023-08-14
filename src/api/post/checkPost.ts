import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/common/commonType'

export type CheckPostRequestProps = {
  postId: number
}

export type CheckPostResponseProps = ResponsePostType

export const checkPost = (req: CheckPostRequestProps) => {
  return axiosGET('/post/check', req)
}
