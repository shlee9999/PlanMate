import { axiosDELETE } from 'api/common/commonAxios'

export type RemovePostRequestProps = {
  postId: number
}

export type RemovePostResponseProps = any
// {
//   body: object
//   statusCode: 'ACCPETED'
//   statusCodeValue: 0
// }

export const removePost = (req: RemovePostRequestProps) => {
  return axiosDELETE('/post/remove', req)
}
