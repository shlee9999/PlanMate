import { CreateReplyRequestProps, createReply } from 'api/comment/createChildComment'
import { FindAllChildResponseProps } from 'api/comment/findAllChild'
import { CommentType } from 'api/types'
import { useQueryClient, useMutation } from 'react-query'
import { dateUtils } from 'utils'

type UseCreateReplyMutationProps = CreateReplyRequestProps &
  Pick<CommentType, 'isPostAuthor' | 'memberName'> & {
    callBack: () => void
  }

/**답글 생성 */
function useCreateReplyMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ content, parentCommentId, postId }: UseCreateReplyMutationProps) =>
      createReply({ content, parentCommentId, postId }),
    {
      onMutate: ({ parentCommentId, content, memberName, postId, isPostAuthor }) => {
        const prevData = queryClient.getQueryData(['replyList', parentCommentId])
        queryClient.setQueryData<FindAllChildResponseProps>(['replyList', parentCommentId], (prev) =>
          [
            {
              commentId: new Date().getTime(),
              content,
              isAuthor: true,
              isMyHearted: false,
              likeCount: 0,
              memberName,
              updatedAt: dateUtils.getKoreanISOString(new Date()).slice(0, 19),
              postId,
              isPostAuthor,
            },
          ].concat(prev)
        )
        return { prevData }
      },
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
