import { FC } from 'react'
import * as s from './styled'
import { MAX_COMMENT_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useForm } from 'hooks'
import { RootState } from 'modules'
import { useCreateCommentMutation } from 'pages/ExamInfo/hooks/mutations'
import { useSelector } from 'react-redux'
import { useDetailData } from '../hooks/useDetailData'

type CommentFormProps = {
  postId: number
  mode: 'examinfo' | 'notice'
  currentPage
}
type CommentForm = {
  comment: string
}
export const CommentForm: FC<CommentFormProps> = ({ postId, mode, currentPage }) => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const {
    registerTextarea: registerCommentInput,
    handleSubmit: handleCommentSubmit,
    setValue: setCommentInputValue,
  } = useForm<CommentForm>()
  const { isMyPost } = useDetailData({
    postId,
    mode,
  })
  const mutateCreateComment = useCreateCommentMutation()
  const onCommentSubmit = ({ comment }: CommentForm): void => {
    mutateCreateComment({
      currentPage,
      content: comment,
      postId,
      callBack: () => setCommentInputValue('comment', ''),
      isPostAuthor: isMyPost,
      // id 비교로 변경해야함
      memberName: userAuthInfo.nickname,
    })
  }
  return (
    <s.CommentForm onSubmit={handleCommentSubmit(onCommentSubmit)}>
      <s.UserNickname>{userAuthInfo.nickname}</s.UserNickname>
      <s.CommentInput
        placeholder="댓글을 남겨보세요."
        {...registerCommentInput('comment', { maxLength: MAX_COMMENT_CHARACTER_COUNT })}
      />
      <s.CommentRegisterButton icon="register">댓글등록</s.CommentRegisterButton>
    </s.CommentForm>
  )
}
