import { CreateCommentRequestProps, createComment } from 'api/comment/createComment'
import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { CommentType } from 'api/types'
import { QueryKeys } from 'types'
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
        QueryKeys.commentData,
        postId,
        currentPage,
      ])
      const newComment = {
        commentId: new Date().getTime(), //tempId
        content,
        isAuthor: true,
        isMyHearted: false,
        likeCount: 0,
        memberName,
        updatedAt: dateUtils.getKoreanISOStringNow().slice(0, 19),
        postId,
        isPostAuthor,
      }
      queryClient.setQueryData<FindAllCommentsResponseProps>([QueryKeys.commentData, postId, currentPage], (prev) => ({
        ...prev,
        totalCount: prev.totalCount + 1,
        commentDtoList: [newComment].concat(prev.commentDtoList),
      }))
      callBack()
      return { previousComments }
    },
    onSuccess: (data, { postId, currentPage }) => {
      queryClient.setQueryData<FindAllCommentsResponseProps>([QueryKeys.commentData, postId, currentPage], (prev) => ({
        ...prev,
        commentDtoList: prev.commentDtoList.map((prevComment, index) =>
          index === 0 ? { ...prevComment, commentId: data.commentId } : prevComment
        ),
      }))
      console.log('create success')
    },
    onError: (err, { postId, currentPage }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData([[QueryKeys.commentData, postId, currentPage]], context.previousComments)
      console.error('create error')
      console.error(err)
    },
  })
  return mutate
}

export default useCreateCommentMutation
