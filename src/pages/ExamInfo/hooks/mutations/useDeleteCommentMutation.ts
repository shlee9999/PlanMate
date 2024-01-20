import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { removeComment } from 'api/comment/removeComment'
import { CommentType } from 'api/types'
import { useQueryClient, useMutation } from 'react-query'

type MutationProps = Pick<CommentType, 'commentId' | 'postId' | 'currentPage'> & {
  callBack?: () => void
}
/**댓글 삭제*/
function useDeleteCommentMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ commentId }: MutationProps) =>
      removeComment({
        commentId,
      }),
    {
      onMutate: ({ currentPage, callBack }: MutationProps) => {
        const previousComments = queryClient.getQueryData(['commentData', currentPage + ''])
        callBack && callBack()
        // replyList 없애야?
        return { previousComments }
      },
      onSuccess: (data, { postId, currentPage, commentId }) => {
        queryClient.setQueryData<FindAllCommentsResponseProps>(['commentData', postId, currentPage + ''], (prev) => ({
          ...prev,
          commentDtoList: prev.commentDtoList.filter((comment) => comment.commentId !== commentId),
        }))
        // 성공 시 invalidate - commentId값 받아와야 수정 가능하므로)
        console.log('delete success')
      },
      onError: (err, { postId, currentPage }, context) => {
        // 오류 발생 시 원래 상태로 복원
        queryClient.setQueryData([['commentData', postId, currentPage + '']], context.previousComments)
      },
    }
  )
  return mutate
}

export default useDeleteCommentMutation
