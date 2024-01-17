import { CheckPostResponseProps } from 'api/post/checkPost'
import { likePost } from 'api/post/likePost'
import { useMutation, useQueryClient } from 'react-query'

type MutationProps = {
  postId: number
}
function useLikePostMutation() {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(({ postId }: MutationProps) => likePost({ postId }), {
    onMutate: ({ postId }) => {
      const previousData = queryClient.getQueryData(['detailData', postId])
      queryClient.setQueryData(['detailData', postId], (old: CheckPostResponseProps) => ({
        ...old,
        isMyHearted: !old.isMyHearted,
        likeCount: old.isMyHearted ? old.likeCount - 1 : old.likeCount + 1,
      }))

      return { previousData }
    },
    onError: (err, { postId }, context) => {
      console.error(err)
      queryClient.setQueryData(['detailData', postId], context.previousData)
    },
  })

  return mutate
}

export default useLikePostMutation
