import * as s from './styled'
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import { useLikeCommentMutation, useEditComment, useCreateReplyMutation } from 'pages/ExamInfo/hooks/mutations'
import { DeleteCommentModal } from 'pages/ExamInfo/components'
import { MAX_COMMENT_CHARACTER_COUNT, MAX_REPLY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { FindAllChildResponseProps, findAllChild } from 'api/comment/findAllChild'
import { ResponseCommentType } from 'api/types'
import { Reply } from 'components'
import { QueryKeyType } from 'enums'
import { useForm } from 'hooks'

type CommentProps = {
  deleteComment?: () => void
  currentPage: number
  reply?: boolean
  isAuthor?: boolean
  postId: number
} & ResponseCommentType

type ReplyForm = {
  reply: string
}
type CommentForm = {
  comment: string
}
export const Comment: FC<CommentProps> = ({
  commentId,
  isPostAuthor,
  isMyHearted,
  likeCount,
  memberName,
  updatedAt,
  content,
  isAuthor,
  postId,
  currentPage,
}) => {
  //대댓글 로직
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)
  const closeEllipsisModal = (): void => isEllipsisOpen && setIsEllipsisOpen(false)
  const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isReplying, setIsReplying] = useState(false)
  const {
    registerTextarea: registerCommentInput,
    handleSubmit: handleCommentSubmit,
    textareaFocus: setCommentFocus,
    setValue: setCommentValue,
  } = useForm<CommentForm>()
  const {
    registerTextarea: registerReplyInput,
    handleSubmit: handleReplySubmit,
    setValue: setReplyValue,
  } = useForm<ReplyForm>()
  const onReplySubmit = ({ reply }: ReplyForm) => {
    if (!postId) return
    mutateCreateReply({
      content: reply,
      parentCommentId: commentId,
      postId,
      callBack: () => setReplyValue('reply', ''),
      memberName,
      isPostAuthor,
    })
  }
  // const [currentReplyPage, setCurrentReplyPage] = useState(1) // todo: Request에 페이지 생기면 넣기
  const { data: replyList } = useQuery<FindAllChildResponseProps>(
    [QueryKeyType.replyList, commentId],
    () => findAllChild({ parentCommentId: commentId, postId }),
    { initialData: [] }
  )
  const navigate = useNavigate()
  const mutateLikeComment = useLikeCommentMutation()
  const mutateEditComment = useEditComment()
  const mutateCreateReply = useCreateReplyMutation()

  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()
  const onClickEllipsisDeleteButton = (): void => setIsDeleteCommentModalOpen(true)

  const onClickLikeButton = (): void => {
    mutateLikeComment({
      commentId,
      postId,
      currentPage,
    })
  }

  const closeDeleteCommentModal = () => setIsDeleteCommentModalOpen(false)
  const onClickReplyButton = (e: React.MouseEvent) => {
    e.preventDefault() //* 댓글 form submit 차단
    setIsReplying((prev) => !prev)
  }

  // const onKeyDown = (e: React.KeyboardEvent) => {
  //   if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
  //     if (e.shiftKey) return
  //     //* Enter 누를시 댓글 수정 완료, shift Enter은 줄바꿈
  //     e.preventDefault()
  //     mutateEditComment({
  //       commentId,
  //       content: inputValue,
  //       postId,
  //       currentPage,
  //       callBack: () => setIsEditing(false),
  //     })
  //   }
  // }
  const onCommentSubmit = ({ comment }: CommentForm) => {
    mutateEditComment({
      commentId,
      content: comment,
      postId,
      currentPage,
      callBack: () => setIsEditing(false),
    })
  }
  const onClickEllipsisEditButton = () => {
    setIsEditing(true)
    closeEllipsisModal()
  }
  const onClickComment = () => isAuthor && navigate(`/examinfo/detail/${postId}`)

  useEffect(() => {
    setCommentFocus('comment')
  }, [isEditing])
  useEffect(() => {
    setCommentValue('comment', content)
  }, [])

  return (
    <>
      <s.Root onClick={closeEllipsisModal}>
        {/* 내가 작성한 댓글만 수정, 삭제 가능함 */}
        {isAuthor && !isEditing && <s.EllipsisButton onClick={toggleEllipsisModal}></s.EllipsisButton>}
        {isEllipsisOpen && (
          <s.EllipsisModal onClick={onClickModal}>
            <s.EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</s.EllipsisEditButton>
            <s.EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</s.EllipsisDeleteButton>
          </s.EllipsisModal>
        )}
        <s.CommentEditForm onSubmit={handleCommentSubmit(onCommentSubmit)}>
          <s.UpperTypoWrapper>
            <s.CommentOwnerNickname>{memberName}</s.CommentOwnerNickname>
            {isPostAuthor && <s.AuthorIcon>글쓴이</s.AuthorIcon>}
            <s.Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.Date>
          </s.UpperTypoWrapper>
          {isEditing ? (
            <>
              <s.CommentEditInput
                // onKeyDown={onKeyDown}
                {...registerCommentInput('comment', { maxLength: MAX_COMMENT_CHARACTER_COUNT })}
              />
              <s.EditCompleteButton icon="register">수정완료</s.EditCompleteButton>
            </>
          ) : (
            <s.Comment onClick={onClickComment} className={isAuthor ? 'mypage_comment' : ''}>
              {content}
            </s.Comment>
          )}
          <s.ReplyButton onClick={onClickReplyButton}>
            답글 <s.ReplyCount>{replyList.length}</s.ReplyCount>
          </s.ReplyButton>
        </s.CommentEditForm>
        <s.LikeButton onClick={onClickLikeButton}>
          <HeartIcon fill={isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {likeCount}
        </s.LikeButton>
        <DeleteCommentModal
          closeModal={closeDeleteCommentModal}
          isOpen={isDeleteCommentModalOpen}
          commentId={commentId}
          postId={postId}
          currentPage={currentPage}
          type="comment"
        />
      </s.Root>
      {isReplying && (
        <>
          {replyList?.map((reply) => (
            <Reply key={reply.commentId} {...reply} parentCommentId={commentId} />
          ))}
          <s.ReplyInputWrapper>
            <s.ReplyMark />
            <s.ReplyForm onSubmit={handleReplySubmit(onReplySubmit)}>
              <s.UserNickname>{userAuthInfo.name}</s.UserNickname>
              <s.ReplyInput
                placeholder="대댓글을 남겨보세요."
                {...registerReplyInput('reply', { maxLength: MAX_REPLY_CHARACTER_COUNT })}
              />
              <s.ReplyRegisterButton icon="register">댓글등록</s.ReplyRegisterButton>
            </s.ReplyForm>
          </s.ReplyInputWrapper>
        </>
      )}
    </>
  )
}
