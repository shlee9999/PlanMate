import { CheckPostResponseProps } from 'api/post/checkPost'
import { EditPostRequestProps, editPost } from 'api/post/editPost'
import { QueryKeys } from 'types'
import { useQueryClient, useMutation } from 'react-query'

type UseEditPostMutationProps = EditPostRequestProps & {
  mode: 'examinfo' | 'notice'
  callBack: () => void
}

/**게시물 수정 */
function useEditPostMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ content, tagList, postId, title }: UseEditPostMutationProps) => editPost({ content, tagList, postId, title }),
    {
      onMutate: ({ content, tagList, postId, title, mode }) => {
        const prevData = queryClient.getQueryData<CheckPostResponseProps>([QueryKeys.detailData, mode, postId])
        queryClient.setQueryData<CheckPostResponseProps>([QueryKeys.detailData, mode, postId], (prev) => ({
          ...prev,
          content,
          tagList,
          postId,
          title,
        }))
        return { prevData }
      },
      onSuccess: () => {
        console.log('success')
      },
      onError: (err, { postId, mode }, context) => {
        console.error(err)
        queryClient.setQueryData<CheckPostResponseProps>([QueryKeys.detailData, mode, postId], context.prevData)
      },
    }
  )
  return mutate
}
export default useEditPostMutation
