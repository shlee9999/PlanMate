import { CheckPostResponseProps } from 'api/post/checkPost'
import { scrapPost } from 'api/post/scrapPost'
import { CommentType } from 'api/types'
import { QueryKeys } from 'types'
import { useMutation, useQueryClient } from 'react-query'

type MutationProps = Pick<CommentType, 'postId'> & {
  mode: 'examinfo' | 'notice'
}

/**게시물 스크랩 */
function useScrapPostMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ postId }: MutationProps) => scrapPost({ postId }), {
    onMutate: ({ postId, mode }) => {
      const previousData = queryClient.getQueryData([QueryKeys.detailData, mode, postId])
      queryClient.setQueryData([QueryKeys.detailData, mode, postId], (prev: CheckPostResponseProps) => ({
        ...prev,
        isMyScraped: !prev.isMyScraped,
        scrapCount: prev.isMyScraped ? prev.scrapCount - 1 : prev.scrapCount + 1,
      }))
      return { previousData }
    },
    onError: (err, { postId, mode }, context) => {
      console.error(err)
      queryClient.setQueryData([QueryKeys.detailData, mode, postId], context.previousData)
    },
  })

  return mutate
}

export default useScrapPostMutation
