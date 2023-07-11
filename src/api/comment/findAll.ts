import { axiosPOST } from 'api/common/commonAxios'

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

export const findAllComments = (obj: FindAllCommentsRequestProps) => {
  return axiosPOST('/comment/find/all', obj)
}
