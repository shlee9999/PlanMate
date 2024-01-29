import { EditCommentRequestProps, editComment } from 'api/comment/editComment'
import { FindAllChildResponseProps } from 'api/comment/findAllChild'
import { QueryKeyType } from 'enums'
import { useQueryClient, useMutation } from 'react-query'

type UseEditReplyProps = EditCommentRequestProps & {
  parentCommentId: number
  callBack: () => void
}

/** */
function useEditReply() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ commentId, content }: UseEditReplyProps) => editComment({ commentId, content }), {
    onMutate: ({ callBack, commentId, content, parentCommentId }) => {
      const prevData = queryClient.getQueryData([QueryKeyType.replyList, parentCommentId])
      queryClient.setQueryData<FindAllChildResponseProps>([QueryKeyType.replyList, parentCommentId], (prev) =>
        prev.map((prevComment) => (prevComment.commentId === commentId ? { ...prevComment, content } : prevComment))
      )
      callBack() //isEditing false
      return { prevData }
    },
    onSuccess: () => {
      console.log('success modify')
    },
    onError: (err, { parentCommentId }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData([QueryKeyType.replyList, parentCommentId], context.prevData)
    },
  })
  return mutate
}
export default useEditReply
