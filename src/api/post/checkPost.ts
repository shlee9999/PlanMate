import { axiosGET } from 'api/common/commonAxios'
import { ResponsePostType } from 'api/types'
import { PostType } from 'api/types'

export type CheckPostRequestProps = Pick<PostType, 'postId'>
export type CheckPostResponseProps = ResponsePostType

/**해당 postId를 가진 게시물 내용 조회 */
export const checkPost = ({ postId }: CheckPostRequestProps): Promise<CheckPostResponseProps> =>
  axiosGET('/post/check', { postId })
