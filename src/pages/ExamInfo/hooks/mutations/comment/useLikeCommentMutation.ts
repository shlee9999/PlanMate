import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { likeComment } from 'api/comment/likeComment'
import { CommentType } from 'api/types'
import { QueryKeyType } from 'enums'
import { useMutation, useQueryClient } from 'react-query'

type MutationProps = Pick<CommentType, 'commentId' | 'postId' | 'currentPage'>

/**
 * @param {number} commentId 댓글 id
 * @param {number} postId 게시물 id
 * @param {number} currentPage 댓글 또는 답글 페이지
 */
/**댓글 좋아요*/
function useLikeCommentMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ commentId }: MutationProps) => likeComment({ commentId }), {
    onMutate: ({ commentId, postId, currentPage }: MutationProps) => {
      const previousData = queryClient.getQueryData([QueryKeyType.commentData, postId, currentPage + ''])
      queryClient.setQueryData<FindAllCommentsResponseProps>(
        [QueryKeyType.commentData, postId, currentPage + ''],
        (prev) => ({
          ...prev,
          commentDtoList: prev.commentDtoList.map((prevComment) =>
            prevComment.commentId === commentId
              ? {
                  ...prevComment,
                  isMyHearted: !prevComment.isMyHearted,
                  likeCount: prevComment.isMyHearted ? prevComment.likeCount - 1 : prevComment.likeCount + 1,
                }
              : prevComment
          ),
        })
      )
      return { previousData }
    },
    onError: (err, { postId, currentPage }, context) => {
      console.error(err)
      queryClient.setQueryData([QueryKeyType.commentData, postId, currentPage + ''], context.previousData)
    },
    onSettled: (data, err, { postId, currentPage }) =>
      queryClient.invalidateQueries([QueryKeyType.commentData, postId, currentPage + '']),
  })

  return mutate
}

export default useLikeCommentMutation
