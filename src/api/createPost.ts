//게시물 생성
import { axiosPOST } from 'api/common/commonAxios'

export type CreatePostRequestProps = {
  content: string
  id: number
  tagList: string[]
  title: string
}

export type CreatePostResponseProps = {
  content: string
  likeCount: 0
  nickname: string
  postId: number
  postTagList: string[]
  scrapCount: number
  title: string
  updatedAt: string
}

export const createPost = ({ content, id, tagList, title }: CreatePostRequestProps) => {
  return axiosPOST('/post/create', { content, id, tagList, title })
}
