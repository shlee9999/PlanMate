import { axiosPOST } from 'api/common/commonAxios'

export type LikePostRequestProps = {
  postId: number
}

export type LikePostResponseProps = boolean

export const likePost = (obj: LikePostRequestProps) => {
  return axiosPOST('/post/like', obj)
}

import { useMutation, useQueryClient } from 'react-query'
import { CheckPostResponseProps } from './checkPost'

function useLikePostMutation(postId) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((id: number) => likePost({ postId: id }), {
    onMutate: () => {
      const previousData = queryClient.getQueryData(['detailData', postId])
      queryClient.setQueryData(['detailData', postId], (old: CheckPostResponseProps) => ({
        ...old,
        isMyHearted: !old.isMyHearted,
        likeCount: old.isMyHearted ? old.likeCount - 1 : old.likeCount + 1,
      }))

      return { previousData }
    },
    onError: (err, variables, context) => {
      console.error(err)
      queryClient.setQueryData(['detailData', postId], context.previousData)
    },
  })

  return mutate
}

export default useLikePostMutation
