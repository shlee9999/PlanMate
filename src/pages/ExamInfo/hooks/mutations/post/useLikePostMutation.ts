import { CheckPostResponseProps } from 'api/post/checkPost'
import { likePost } from 'api/post/likePost'
import { CommentType } from 'api/types'
import { QueryKeyType } from 'enums'
import { useMutation, useQueryClient } from 'react-query'

type MutationProps = Pick<CommentType, 'postId'> & {
  mode: 'examinfo' | 'notice'
}

/**게시물 좋아요*/
function useLikePostMutation() {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(({ postId }: MutationProps) => likePost({ postId }), {
    onMutate: ({ postId, mode }) => {
      const previousData = queryClient.getQueryData([QueryKeyType.detailData, mode, postId])
      queryClient.setQueryData([QueryKeyType.detailData, mode, postId], (old: CheckPostResponseProps) => ({
        ...old,
        isMyHearted: !old.isMyHearted,
        likeCount: old.isMyHearted ? old.likeCount - 1 : old.likeCount + 1,
      }))

      return { previousData }
    },
    onError: (err, { postId, mode }, context) => {
      console.error(err)
      queryClient.setQueryData([QueryKeyType.detailData, mode, postId], context.previousData)
    },
  })

  return mutate
}

export default useLikePostMutation
