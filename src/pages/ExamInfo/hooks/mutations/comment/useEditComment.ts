import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { EditCommentRequestProps, editComment } from 'api/comment/editComment'
import { CommentType } from 'api/types'
import { useQueryClient, useMutation } from 'react-query'
import { QueryKeys } from 'types'

type MutationProps = EditCommentRequestProps &
  Pick<CommentType, 'postId' | 'currentPage'> & {
    callBack: () => void
  }

/**댓글 수정 */
function useEditComment() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ content, commentId }: MutationProps) => editComment({ content, commentId }), {
    onMutate: ({ postId, currentPage, callBack, commentId, content }) => {
      const prevData = queryClient.getQueryData([QueryKeys.commentData, postId, currentPage])
      queryClient.setQueryData<FindAllCommentsResponseProps>([QueryKeys.commentData, postId, currentPage], (prev) => ({
        ...prev,
        commentDtoList: prev.commentDtoList.map((prevComment) =>
          prevComment.commentId === commentId ? { ...prevComment, content } : prevComment
        ),
      }))
      callBack() //isEditing false
      return { prevData }
    },
    onSuccess: () => {
      console.log('success modify')
    },
    onError: (err, { postId, currentPage }, context) => {
      queryClient.setQueryData([QueryKeys.commentData, postId, currentPage], context.prevData)
    },
  })
  return mutate
}

export default useEditComment
