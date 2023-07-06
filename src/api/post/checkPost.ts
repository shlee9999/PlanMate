import { axiosGET } from 'api/common/commonAxios'

export type CheckPostRequestProps = {
  postId: number
}

export type CheckPostResponseProps = {
  content: string
  likeCount: number
  nickname: string
  postId: number
  postTagList: string[]
  scrapCount: number
  title: string
  updatedAt: string
}

export const checkPost = ({}: CheckPostRequestProps) => {
  return axiosGET('', {})
}
