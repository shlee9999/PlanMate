import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { deleteComment } from 'api/comment/deleteComment'
import { CommentType } from 'api/types'
import { useQueryClient, useMutation } from 'react-query'
import { QueryKeyType } from 'enums'

type MutationProps = Pick<CommentType, 'commentId' | 'postId' | 'currentPage'> & {
  callBack?: () => void
}
/**댓글 삭제*/
function useDeleteCommentMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ commentId }: MutationProps) =>
      deleteComment({
        commentId,
      }),
    {
      onMutate: ({ currentPage, callBack }: MutationProps) => {
        const previousComments = queryClient.getQueryData([QueryKeyType.commentData, currentPage + ''])
        callBack && callBack()
        return { previousComments }
      },
      onSuccess: (data, { postId, currentPage, commentId }) => {
        queryClient.setQueryData<FindAllCommentsResponseProps>(
          [QueryKeyType.commentData, postId, currentPage + ''],
          (prev) => ({
            ...prev,
            commentDtoList: prev.commentDtoList.filter((comment) => comment.commentId !== commentId),
          })
        )
        // 성공 시 invalidate - commentId값 받아와야 수정 가능하므로)
        console.log('delete success')
      },
      onError: (err, { postId, currentPage }, context) => {
        // 오류 발생 시 원래 상태로 복원
        queryClient.setQueryData([[QueryKeyType.commentData, postId, currentPage + '']], context.previousComments)
      },
    }
  )
  return mutate
}

export default useDeleteCommentMutation
