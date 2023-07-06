import { axiosDELETE } from 'api/common/commonAxios'

export type RemovePostRequestProps = {
  postId: number
}

export type RemovePostResponseProps = {
  body: {}
  statusCode: 'ACCPETED'
  statusCodeValue: 0
}

export const removePost = (req: RemovePostRequestProps) => {
  return axiosDELETE('', req)
}
