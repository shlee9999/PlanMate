import { CreateCommentRequestProps, createComment } from 'api/comment/createComment'
import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { CommentType } from 'api/types'
import { useQueryClient, useMutation } from 'react-query'
import { dateUtils } from 'utils'

type MutationProps = CreateCommentRequestProps &
  Pick<CommentType, 'currentPage' | 'isPostAuthor' | 'memberName'> & {
    callBack: () => void
  }

/**댓글 생성 */
function useCreateCommentMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ content, postId }: MutationProps) => createComment({ content, postId }), {
    onMutate: ({ isPostAuthor, currentPage, content, postId, callBack, memberName }) => {
      const previousComments = queryClient.getQueryData<FindAllCommentsResponseProps>([
        'commentData',
        postId,
        currentPage + '',
      ])
      const newComment = {
        commentId: new Date().getTime(), //tempId
        content,
        isAuthor: true,
        isMyHearted: false,
        likeCount: 0,
        memberName,
        updatedAt: dateUtils.getKoreanISOString(new Date()).slice(0, 19),
        postId,
        isPostAuthor,
      }
      queryClient.setQueryData<FindAllCommentsResponseProps>(['commentData', postId, currentPage + ''], (prev) => ({
        ...prev,
        totalCount: prev.totalCount + 1,
        commentDtoList: [newComment].concat(prev.commentDtoList),
      }))
      callBack()
      return { previousComments }
    },
    onSuccess: (data, { postId, currentPage }, context) => {
      queryClient.setQueryData<FindAllCommentsResponseProps>(['commentData', postId, currentPage + ''], (prev) => {
        const updatedComment = prev.commentDtoList[0]
        updatedComment.commentId = data.commentId
        return { ...prev, commentDtoList: [updatedComment, ...context.previousComments.commentDtoList] }
      })
      console.log('create success')
    },
    onError: (err, { postId, currentPage }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData([['commentData', postId, currentPage + '']], context.previousComments)
      console.error('create error')
      console.error(err)
    },
  })
  return mutate
}

export default useCreateCommentMutation
