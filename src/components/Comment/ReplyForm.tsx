import { FC } from 'react'
import * as s from './styled'
import { MAX_REPLY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useForm } from 'hooks'
import { useCreateReplyMutation } from 'pages/ExamInfo/hooks/mutations'
import { RootState } from 'modules'
import { useSelector } from 'react-redux'

type ReplyFormProps = {
  memberName: string
  isPostAuthor: boolean
  postId: number
  parentCommentId: number
}
type ReplyFormType = {
  reply: string
}

export const ReplyForm: FC<ReplyFormProps> = ({ memberName, isPostAuthor, postId, parentCommentId }) => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const mutateCreateReply = useCreateReplyMutation()
  const {
    registerTextarea: registerReplyInput,
    handleSubmit: handleReplySubmit,
    setValue: setReplyValue,
  } = useForm<ReplyFormType>()
  const onReplySubmit = ({ reply }: ReplyFormType) => {
    if (!postId) return
    mutateCreateReply({
      content: reply,
      parentCommentId,
      postId,
      callBack: () => setReplyValue('reply', ''),
      memberName,
      isPostAuthor,
    })
  }
  return (
    <s.ReplyInputWrapper>
      <s.ReplyMark />
      <s.ReplyForm onSubmit={handleReplySubmit(onReplySubmit)}>
        <s.UserNickname>{userAuthInfo.nickname}</s.UserNickname>
        <s.ReplyInput
          placeholder="대댓글을 남겨보세요."
          {...registerReplyInput('reply', { maxLength: MAX_REPLY_CHARACTER_COUNT })}
        />
        <s.ReplyRegisterButton icon="register">댓글등록</s.ReplyRegisterButton>
      </s.ReplyForm>
    </s.ReplyInputWrapper>
  )
}
