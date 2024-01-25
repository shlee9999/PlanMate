import { FindAllChildResponseProps } from 'api/comment/findAllChild'
import { LikeCommentRequestProps, likeComment } from 'api/comment/likeComment'
import { useQueryClient, useMutation } from 'react-query'

type UseLikeReplyMutationProps = LikeCommentRequestProps & {
  parentCommentId: number
}

/**답글 좋아요 - likeComment 사용하는건 댓글 좋아요와 같지만 useQuery의 key값이 다름
 * commentId
 */
function useLikeReplyMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ commentId }: UseLikeReplyMutationProps) => likeComment({ commentId }), {
    onMutate: ({ commentId, parentCommentId }: UseLikeReplyMutationProps) => {
      const previousData = queryClient.getQueryData(['replyList', parentCommentId])
      queryClient.setQueryData<FindAllChildResponseProps>(['replyList', parentCommentId], (prev) =>
        prev.map((prevComment) =>
          prevComment.commentId === commentId
            ? {
                ...prevComment,
                isMyHearted: !prevComment.isMyHearted,
                likeCount: prevComment.isMyHearted ? prevComment.likeCount - 1 : prevComment.likeCount + 1,
              }
            : prevComment
        )
      )
      return { previousData }
    },
    onSuccess: () => {
      console.log('success')
    },
    onError: (err, { parentCommentId }, context) => {
      console.error(err)
      queryClient.setQueryData(['replyList', parentCommentId], context.previousData)
    },
    onSettled: (data, err, { parentCommentId }) => queryClient.invalidateQueries(['replyList', parentCommentId]),
  })
  return mutate
}
export default useLikeReplyMutation
