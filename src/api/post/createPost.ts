import { axiosPOST } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/types'
import { PostType } from 'api/types'

export type CreatePostRequestProps = Pick<PostType, 'content' | 'tagList' | 'title'>

export type CreatePostResponseProps = ResponsePostType

/**게시물 생성 */
export const createPost = ({ content, tagList, title }: CreatePostRequestProps) =>
  axiosPOST('/post/create', { content, tagList, title })
