import { axiosPOST } from 'api/common/commonAxios'

export type LikePostRequestProps = {
  postId: number
}

export type LikePostResponseProps = boolean

export const likePost = (obj: LikePostRequestProps) => {
  return axiosPOST('/post/like', obj)
}
