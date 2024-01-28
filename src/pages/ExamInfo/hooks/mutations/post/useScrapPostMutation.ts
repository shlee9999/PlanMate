import { CheckPostResponseProps } from 'api/post/checkPost'
import { scrapPost } from 'api/post/scrapPost'
import { CommentType } from 'api/types'
import { QueryKeyType } from 'enums'
import { useMutation, useQueryClient } from 'react-query'

type MutationProps = Pick<CommentType, 'postId'> & {
  mode: 'examinfo' | 'notice'
}

/**게시물 스크랩 */
function useScrapPostMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ postId }: MutationProps) => scrapPost({ postId }), {
    onMutate: ({ postId, mode }) => {
      const previousData = queryClient.getQueryData([QueryKeyType.detailData, mode, postId])
      queryClient.setQueryData([QueryKeyType.detailData, mode, postId], (prev: CheckPostResponseProps) => ({
        ...prev,
        isMyScraped: !prev.isMyScraped,
        scrapCount: prev.isMyScraped ? prev.scrapCount - 1 : prev.scrapCount + 1,
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

export default useScrapPostMutation
