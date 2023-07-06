import { axiosPOST } from 'api/common/commonAxios'
import { ResponsePostType } from '../common/commonType'

export type CreatePostRequestProps = {
  content: string
  id?: number
  tagList: string[]
  title: string
}

export type CreatePostResponseProps = ResponsePostType

export const createPost = (req: CreatePostRequestProps) => {
  return axiosPOST('/post/create', req)
}
