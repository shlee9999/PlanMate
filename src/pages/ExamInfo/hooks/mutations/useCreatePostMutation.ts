import { CreatePostRequestProps, createPost } from 'api/post/createPost'
import { useMutation } from 'react-query'

type UseCreatePostMutationProps = CreatePostRequestProps & {
  callBack: () => void
}

/**게시물 생성 */
function useCreatePostMutation() {
  const { mutate } = useMutation(
    ({ content, tagList, title }: UseCreatePostMutationProps) => createPost({ content, tagList, title }),
    {
      onSuccess: (data, { content, tagList, title, callBack }) => {
        console.log('success')
        callBack()
      },
      onError: (err, { content, tagList, title }, context) => {
        console.error('err')
      },
    }
  )
  return mutate
}
export default useCreatePostMutation
