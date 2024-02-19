import { CreateReplyRequestProps, createReply } from 'api/comment/createChildComment'
import { FindAllChildResponseProps } from 'api/comment/findAllChild'
import { CommentType } from 'api/types'
import { QueryKeys } from 'types'
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
        const prevData = queryClient.getQueryData<FindAllChildResponseProps>([QueryKeys.replyList, parentCommentId])
        queryClient.setQueryData<FindAllChildResponseProps>([QueryKeys.replyList, parentCommentId], (prev) =>
          [
            {
              commentId: new Date().getTime(),
              content,
              isAuthor: true,
              isMyHearted: false,
              likeCount: 0,
              memberName,
              updatedAt: dateUtils.getKoreanISOString(dateUtils.getTodayDateProps()).slice(0, 19),
              postId,
              isPostAuthor,
            },
          ].concat(prev)
        )
        return { prevData }
      },
      onSuccess: (data, { parentCommentId }) => {
        queryClient.setQueryData<FindAllChildResponseProps>([QueryKeys.replyList, parentCommentId], (prev) =>
          prev.map((prevReply) =>
            prevReply.commentId === data.commentId
              ? {
                  ...prevReply,
                  commentId: data.commentId,
                }
              : prevReply
          )
        )
        console.log('success')
      },
      onError: (err, { parentCommentId }, context) => {
        queryClient.setQueryData<FindAllChildResponseProps>([QueryKeys.replyList, parentCommentId], context.prevData)
        console.error(err)
      },
      onSettled: (data, err, { parentCommentId, callBack }) => {
        callBack()
        queryClient.invalidateQueries([QueryKeys.replyList, parentCommentId])
      },
    }
  )
  return mutate
}
export default useCreateReplyMutation
