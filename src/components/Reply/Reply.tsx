import * as s from './styled'
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { ResponseCommentType } from 'api/types'
import { editComment } from 'api/comment/editComment'
import { useNavigate } from 'react-router-dom'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import { DeleteCommentModal } from '../../pages/ExamInfo/components'
import { MAX_REPLY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import useLikeReplyMutation from 'pages/ExamInfo/hooks/mutations/comment/useLikeReplyMutation'
import { useForm } from 'hooks'
import useEditReply from 'pages/ExamInfo/hooks/mutations/comment/useEditReply'

type ExamInfoReplyProps = {
  // currentPage: number
  parentCommentId: number
} & ResponseCommentType
type IForm = {
  reply: string
}
export const Reply: FC<ExamInfoReplyProps> = ({
  commentId,
  isPostAuthor,
  isMyHearted,
  likeCount,
  memberName,
  updatedAt,
  content,
  postId,
  isAuthor,
  parentCommentId,
  // currentPage,
}) => {
  //대댓글 로직
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)
  const closeEllipsisModal = (): void => isEllipsisOpen && setIsEllipsisOpen(false)
  const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const { registerTextarea, handleSubmit, setValue, textareaFocus } = useForm<IForm>()
  const navigate = useNavigate()
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()
  const onClickEllipsisDeleteButton = (): void => setIsDeleteCommentModalOpen(true)
  const mutateEditReply = useEditReply()
  const mutateLikeReply = useLikeReplyMutation()
  const onClickLikeButton = () => mutateLikeReply({ commentId, parentCommentId }) //like api
  const closeDeleteCommentModal = () => setIsDeleteCommentModalOpen(false)
  const onSubmit = ({ reply }: IForm) => {
    mutateEditReply({
      commentId,
      content: reply,
      parentCommentId,
      callBack: () => setIsEditing(false),
    })
  }
  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }

  const onClickEllipsisEditButton = () => {
    setIsEditing(true)
    closeEllipsisModal()
  }

  //* 마이페이지에서 봤을 때 본인이 쓴 댓글이면 해당 포스트로 이동한다.
  const onClickComment = () => isAuthor && navigate(`/examinfo/detail/${postId}`)

  useEffect(() => {
    setValue('reply', content)
    textareaFocus('reply')
  }, [isEditing])

  return (
    <>
      <s.Root onClick={closeEllipsisModal}>
        <s.ReplyMark />
        {isAuthor && !isEditing && <s.EllipsisButton onClick={toggleEllipsisModal}></s.EllipsisButton>}
        {isEllipsisOpen && (
          <s.EllipsisModal onClick={onClickModal}>
            <s.EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</s.EllipsisEditButton>
            <s.EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</s.EllipsisDeleteButton>
          </s.EllipsisModal>
        )}
        <s.ReplyEditForm onSubmit={handleSubmit(onSubmit)}>
          <s.UpperTypoWrapper>
            <s.CommentOwnerNickname>{memberName}</s.CommentOwnerNickname>
            {isPostAuthor && <s.AuthorIcon>글쓴이</s.AuthorIcon>}
            <s.Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.Date>
          </s.UpperTypoWrapper>
          {isEditing ? (
            <>
              <s.ReplyEditInput {...registerTextarea('reply', { maxLength: MAX_REPLY_CHARACTER_COUNT })} />
              <s.EditCompleteButton icon="check">수정완료</s.EditCompleteButton>
            </>
          ) : (
            <s.Comment onClick={onClickComment} className={isAuthor ? '' : 'mypage_comment'}>
              {content}
            </s.Comment>
          )}
        </s.ReplyEditForm>
        <s.LikeButton onClick={onClickLikeButton}>
          <HeartIcon fill={isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {likeCount}
        </s.LikeButton>
        <DeleteCommentModal
          closeModal={closeDeleteCommentModal}
          isOpen={isDeleteCommentModalOpen}
          commentId={commentId}
          postId={postId}
          type="reply"
          parentCommentId={parentCommentId}
        />
      </s.Root>
    </>
  )
}
