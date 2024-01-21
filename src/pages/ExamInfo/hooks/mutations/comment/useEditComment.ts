import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { EditCommentRequestProps, editComment } from 'api/comment/editComment'
import { CommentType } from 'api/types'
import { useQueryClient, useMutation } from 'react-query'

type MutationProps = EditCommentRequestProps &
  Pick<CommentType, 'postId' | 'currentPage'> & {
    callBack: () => void
  }

/**댓글 수정 */
function useEditComment() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ content, commentId }: MutationProps) => editComment({ content, commentId }), {
    onMutate: ({ postId, currentPage, callBack, commentId, content }) => {
      const prevData = queryClient.getQueryData(['commentData', postId, currentPage + ''])
      queryClient.setQueryData<FindAllCommentsResponseProps>(['commentData', postId, currentPage + ''], (prev) => ({
        ...prev,
        commentDtoList: prev.commentDtoList.map((prevComment) =>
          prevComment.commentId === commentId ? { ...prevComment, content } : prevComment
        ),
      }))

      callBack() //isEditing false
      return { prevData }
    },
    onSuccess: () => {
      // 성공 시 invalidate - commentId값 받아와야 수정 가능하므로)
      console.log('success modify')
    },
    onError: (err, { postId, currentPage }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData(['commentData', postId, currentPage + ''], context.prevData)
    },
  })
  return mutate
}

export default useEditComment
