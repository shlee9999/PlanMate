import { axiosPOST } from 'api/common/commonAxios'

export type ToggleLikeRequestProps = {
  postId: number
}

export type ToggleLikeResponseProps = boolean

export const toggleLike = ({}: ToggleLikeRequestProps) => {
  return axiosPOST('/post/like', {})
}
