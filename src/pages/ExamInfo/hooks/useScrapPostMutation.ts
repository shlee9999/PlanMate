import { CheckPostResponseProps } from 'api/post/checkPost'
import { scrapPost } from 'api/post/scrapPost'
import { useMutation, useQueryClient } from 'react-query'

type MutationProps = {
  postId: number
}
function useScrapPostMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ postId }: MutationProps) => scrapPost({ postId }), {
    onMutate: ({ postId }) => {
      const previousData = queryClient.getQueryData(['detailData', postId])
      queryClient.setQueryData(['detailData', postId], (prev: CheckPostResponseProps) => ({
        ...prev,
        isMyScraped: !prev.isMyScraped,
        scrapCount: prev.isMyScraped ? prev.scrapCount - 1 : prev.scrapCount + 1,
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

export default useScrapPostMutation
