import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import { ModifyCommentRequestProps, modifyComment } from 'api/comment/modifyComment'
import { useQueryClient, useMutation } from 'react-query'

type MutationProps = ModifyCommentRequestProps & {
  postId: number
  currentPage: number
  callBack: () => void
}
/**
 * useModifyComment - 댓글 수정을 위한 커스텀 훅
 *
 * @usedBy ExamInfoComment
 * @description
 * - 수정된 댓글 내용을 서버에 반영
 * - 뮤테이션 후 상태 관리 및 캐시 업데이트
 *

 *
 * @returns {Function} mutateModifyComment - 댓글 수정 뮤테이션 함수
 *
 * @example
 * const mutateModifyComment = useModifyComment();
 * mutateModifyComment({
 *   content: '수정된 내용',
 *   commentId: 1,
 *   postId: 123,
 *   currentPage: 1,
 *   callBack: () => console.log('댓글 수정 완료')
 * });
 */

function useModifyComment() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ content, commentId }: MutationProps) => modifyComment({ content, commentId }), {
    onMutate: ({ postId, currentPage, callBack, commentId, content }) => {
      const prevData = queryClient.getQueryData(['commentData', postId, currentPage + ''])
      queryClient.setQueryData<FindAllCommentsResponseProps>(['commentData', postId, currentPage + ''], (prev) => ({
        ...prev,
        commentDtoList: prev.commentDtoList.map((prevComment) =>
          prevComment.commentId === commentId ? { ...prevComment, content } : prevComment
        ),
      }))

      callBack() //isEditing false
      return { prevData }
    },
    onSuccess: (data) => {
      // 성공 시 invalidate - commentId값 받아와야 수정 가능하므로)
      console.log('success modify')
    },
    onError: (err, { postId, currentPage }, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData(['commentData', postId, currentPage + ''], context.prevData)
    },
  })
  return mutate
}

export default useModifyComment
