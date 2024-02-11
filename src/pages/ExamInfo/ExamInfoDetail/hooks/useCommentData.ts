import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { useQuery } from 'react-query'
import { QueryKeys } from 'types'

type useCommentDataProps = { postId: number; currentPage: number }

export const useCommentData = ({ postId, currentPage }: useCommentDataProps) => {
  const { data: commentData, isLoading: isCommentLoading } = useQuery<FindAllCommentsResponseProps>(
    [QueryKeys.commentData, postId, currentPage + ''],
    () => findAllComments({ pages: currentPage - 1, postId }),
    { keepPreviousData: true }
  )
  const { commentDtoList = [], totalCount = 0, totalPages = 0 } = commentData || {}
  return {
    commentData,
    isCommentLoading,
    commentDtoList,
    totalCount,
    totalPages,
  }
}
