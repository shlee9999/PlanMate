import { axiosPOST } from 'api/common/commonAxios'
import { ResponseCommentType } from 'api/common/commonType'

export type FindAllChildRequestProps = {
  parentCommentId: number
  postId: number
}

export type FindAllChildResponseProps = ResponseCommentType[]

export const findAllChild = (req: FindAllChildRequestProps) => {
  return axiosPOST('/comment/child/recent', req)
}
