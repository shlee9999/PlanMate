import { DeletePostRequestProps, removePost } from 'api/post/deletePost'
import { useMutation } from 'react-query'

type UseDeletePostMutationProps = DeletePostRequestProps & {
  callBack: () => void
}

/**게시물 삭제 */
function useDeletePostMutation() {
  const { mutate } = useMutation(({ postId }: UseDeletePostMutationProps) => removePost({ postId }), {
    onSuccess: (data, { callBack }) => {
      console.log('success')
      callBack()
    },
    onError: (err) => {
      console.error(err)
    },
  })
  return mutate
}
export default useDeletePostMutation
