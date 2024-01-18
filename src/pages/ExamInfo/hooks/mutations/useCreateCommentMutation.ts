import { createComment } from 'api/comment/createComment'
import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { useQueryClient, useMutation } from 'react-query'
import { dateUtils } from 'utils/helper'

type MutationProps = {
  currentPage: number
  content: string
  postId: number
  callBack: () => void
  isAuthor: boolean
  memberName: string
}
/**댓글 생성
 * @currentPage 댓글 페이지
 * @content 댓글 내용
 * @postId
 * @callBack
 * @isAuthor 댓글 작성자가 글 작성자인지
 * @memberName 댓글 작성자 닉네임
 */
function useCreateCommentMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ content, postId }: MutationProps) => createComment({ content, postId }), {
    onMutate: ({ isAuthor, currentPage, content, postId, callBack, memberName }) => {
      const previousComments = queryClient.getQueryData(['commentData', postId, currentPage + ''])
      queryClient.setQueryData<FindAllCommentsResponseProps>(['commentData', postId, currentPage + ''], (prev) => ({
        ...prev,
        totalCount: prev.totalCount + 1,
        commentDtoList: [
          {
            commentId: new Date().getTime(), //tempId
            content,
            isAuthor,
            isMyHearted: false,
            likeCount: 0,
            memberName,
            updatedAt: dateUtils.getKoreanISOString(new Date()).slice(0, 19),
            postId,
          },
        ].concat(prev.commentDtoList),
      }))
      callBack()
      return { previousComments }
    },
    onSuccess: (data, { postId, currentPage }) => {
      // 성공 시 invalidate - commentId값 받아와야 수정 가능하므로)
      queryClient.invalidateQueries(['commentData', postId, currentPage + ''])
    },
    onError: (err, { postId, currentPage }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData([['commentData', postId, currentPage + '']], context.previousComments)
    },
  })
  return mutate
}

export default useCreateCommentMutation
