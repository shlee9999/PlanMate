import { axiosDELETE } from 'api/common/commonAxios'
import { PostType } from 'api/types/PostType'

export type RemovePostRequestProps = Pick<PostType, 'postId'>

/**게시물 삭제 */
export const removePost = ({ postId }: RemovePostRequestProps) => axiosDELETE('/post/remove', { postId })
