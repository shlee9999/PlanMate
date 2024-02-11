import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import { useQuery } from 'react-query'

type useDetailDataProps = {
  postId: number
  mode: 'examinfo' | 'notice'
}

export const useDetailData = ({ postId, mode }: useDetailDataProps) => {
  const { data: detailData, isLoading: isDetailLoading } = useQuery<CheckPostResponseProps>(
    ['detailData', mode, postId],
    () => checkPost({ postId })
  )
  const {
    postTagList = [],
    nickname = '',
    title = '',
    createdAt = '',
    content = '',
    isMyPost = false,
  } = detailData || {}
  return {
    detailData,
    isDetailLoading,
    postTagList,
    nickname,
    title,
    createdAt,
    content,
    isMyPost,
  }
}
