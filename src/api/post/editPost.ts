import { axiosPOST } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/types'
import { PostType } from 'api/types'

export type EditPostRequestProps = Pick<PostType, 'content' | 'postId' | 'tagList' | 'title'>

export type EditPostResponseProps = ResponsePostType

/**게시물 수정 */
export const editPost = ({ content, postId, tagList, title }: EditPostRequestProps) =>
  axiosPOST('/post/edit', { content, postId, tagList, title })
