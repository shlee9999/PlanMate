import { axiosDELETE } from 'api/common/commonAxios'

export type RemoveScrapRequestProps = {
  postId: number
}

export type RemoveScrapResponseProps = {
  body: {}
  statusCode: 'ACCPETED'
  statusCodeValue: 0
}

export const removeScrap = (req: RemoveScrapRequestProps) => {
  return axiosDELETE('', req)
}
