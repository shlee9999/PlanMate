import { axiosDELETE } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type DeletePostRequestProps = Pick<PostType, 'postId'>

/**게시물 삭제 */
export const removePost = ({ postId }: DeletePostRequestProps) => axiosDELETE('/post', { postId })
