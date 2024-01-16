import { axiosPOST } from 'api/common/commonAxios'
import { ResponseCommentType } from 'api/common/commonType'

export type FindAllCommentsRequestProps = {
  pages: number
  postId: number
}

export type FindAllCommentsResponseProps = {
  commentDtoList: ResponseCommentType[]
  totalCount: number
  totalPages: number
}

export const findAllComments = (obj: FindAllCommentsRequestProps): Promise<FindAllCommentsResponseProps> => {
  return axiosPOST('/comment/find/all', obj)
}
