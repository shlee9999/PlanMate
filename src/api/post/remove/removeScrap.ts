import { axiosDELETE } from 'api/common/commonAxios'

export type RemoveScrapRequestProps = {
  postId: number
}

export type RemoveScrapResponseProps = any
export const removeScrap = (req: RemoveScrapRequestProps) => {
  return axiosDELETE('/post/remove/scrap', req)
}
