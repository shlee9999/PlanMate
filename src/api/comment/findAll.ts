import { axiosGET } from 'api/common/commonAxios'

export type FindAllCommentsRequestProps = {
  pages: number
  postId: number
}

export type FindAllCommentsResponseProps = {
  content: string
  isAuthor: boolean
  likeCount: number
  memberName: string
  updatedAt: string
}

export const findAllComments = (req: FindAllCommentsRequestProps) => {
  return axiosGET('/find/all', req)
}
