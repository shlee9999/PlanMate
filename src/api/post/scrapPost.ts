import { axiosPOST } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type ScrapPostRequestProps = Pick<PostType, 'postId'>

/**게시물 스크랩 */
export const scrapPost = ({ postId }: ScrapPostRequestProps) => axiosPOST('/post/scrap', { postId })
