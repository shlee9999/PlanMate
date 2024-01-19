import { axiosPOST } from 'api/common/commonAxios'
import { PostType } from 'api/types/PostType'

export type LikePostRequestProps = Pick<PostType, 'postId'>

/**게시물 좋아요 */
export const likePost = ({ postId }: LikePostRequestProps) => axiosPOST('/post/like', { postId })
