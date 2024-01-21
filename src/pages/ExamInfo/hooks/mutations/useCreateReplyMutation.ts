import { CreateReplyRequestProps, createReply } from 'api/comment/createChildComment'
import { useQueryClient, useMutation } from 'react-query'

type UseCreateReplyMutationProps = CreateReplyRequestProps & {
  callBack: () => void
}

/**답글 생성 */
function useCreateReplyMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ content, parentCommentId, postId }: UseCreateReplyMutationProps) =>
      createReply({ content, parentCommentId, postId }),
    {
      onSuccess: () => {
        console.log('success')
      },
      onError: (err) => {
        console.error(err)
      },
      onSettled: (data, err, { parentCommentId, callBack }) => {
        callBack()
        queryClient.invalidateQueries(['replyList', parentCommentId])
      },
    }
  )
  return mutate
}
export default useCreateReplyMutation
