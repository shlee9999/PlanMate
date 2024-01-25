import { DeleteCommentRequestProps, deleteComment } from 'api/comment/deleteComment'
import { FindAllChildResponseProps } from 'api/comment/findAllChild'
import { useQueryClient, useMutation } from 'react-query'

type UseDeleteReplyMutationProps = DeleteCommentRequestProps & {
  callBack: () => void
  parentCommentId: number
}

/**답글 지우기
 * @param {number} commentId
 * @param {()=>void} callBack
 */
function useDeleteReplyMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ commentId }: UseDeleteReplyMutationProps) => deleteComment({ commentId }), {
    onMutate: ({ parentCommentId, callBack }: UseDeleteReplyMutationProps) => {
      const previousComments = queryClient.getQueryData(['replyList', parentCommentId])
      callBack && callBack()
      return { previousComments }
    },
    onSuccess: (data, { commentId, parentCommentId }) => {
      queryClient.setQueryData<FindAllChildResponseProps>(['replyList', parentCommentId], (prev) =>
        prev.filter((prevComment) => prevComment.commentId !== commentId)
      )
      console.log('delete success')
    },
    onError: (err, { parentCommentId }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData([['replyList', parentCommentId]], context.previousComments)
    },
  })
  return mutate
}
export default useDeleteReplyMutation
