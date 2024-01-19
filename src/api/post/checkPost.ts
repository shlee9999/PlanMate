import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/common/types'

export type CheckPostRequestProps = {
  postId: number
}

export type CheckPostResponseProps = ResponsePostType

export const checkPost = (req: CheckPostRequestProps): Promise<CheckPostResponseProps> => {
  return axiosGET('/post/check', req)
}
