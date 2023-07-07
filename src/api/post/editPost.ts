import { axiosPOST } from 'api/common/commonAxios'
import { ResponsePostType } from '../common/commonType'

export type EditPostRequestProps = {
  content: string
  id: number
  tagList: string[]
  title: string
}

export type EditPostResponseProps = ResponsePostType

export const editPost = (req: EditPostRequestProps) => {
  return axiosPOST('/post/edit', req)
}
