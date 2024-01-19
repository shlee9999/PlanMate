import { axiosPOST } from 'api/common/commonAxios'
import { PostType } from 'api/types/PostType'

export type ToggleLikeRequestProps = Pick<PostType, 'postId'>

/**게시물 좋아요 */
export const toggleLike = ({ postId }: ToggleLikeRequestProps) => axiosPOST('/post/like', { postId })
