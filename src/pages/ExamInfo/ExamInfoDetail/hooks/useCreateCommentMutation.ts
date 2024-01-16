import { createComment } from 'api/comment/createComment'
import { FindAllCommentsResponseProps } from 'api/comment/findAll'
import userAuthInfo from 'modules/userAuthInfo'
import { useQueryClient, useMutation } from 'react-query'
import { getKoreanISOString } from 'utils/helper'

function useCreateCommentMutation({
  currentPage,
  content,
  postId,
}: {
  currentPage: number
  content: string
  postId: number
}) {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(() => createComment({ content: content, postId }), {
    onMutate: async () => {
      const previousComments = queryClient.getQueryData(['commentData', currentPage + ''])
      queryClient.setQueryData(['commentData', currentPage + ''], (old: FindAllCommentsResponseProps) => ({
        ...old,
        commentDtoList: [
          ...old.commentDtoList,
          {
            commentId: new Date().getTime,
            content,
            isAuthor: false,
            isMyHearted: false,
            likeCount: 0,
            memberName: userAuthInfo.name,
            updatedAt: getKoreanISOString(new Date()), //시간차 있을듯
            postId,
          },
        ],
      }))
      return { previousComments }
    },
    onError: (err, newComment, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData(['commentData', currentPage + ''], context.previousComments)
    },
    onSuccess: () => {
      // 성공 시 추가 조치 필요 없음 (옵셔널: 새 댓글 목록을 다시 가져올 수 있음)
      queryClient.invalidateQueries(['commentData', currentPage + ''])
    },
  })
  return mutate
}

export default useCreateCommentMutation
