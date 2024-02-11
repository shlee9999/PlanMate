import * as s from './styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import { DeleteCommentModal } from 'pages/ExamInfo/components'
import { MAX_COMMENT_CHARACTER_COUNT, MAX_REPLY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { ResponseCommentType } from 'api/types'
import { Reply } from 'components'
import { useForm, useModal } from 'hooks'
import { useComment } from './useComment'
import { useDetectClickOutside } from 'hooks/useDetectClickOutside'

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
function Comment({
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
}: CommentProps) {
  //대댓글 로직
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const {
    isOpen: isEllipsisOpen,
    closeModal: closeEllipsisModal,
    toggleModal: toggleEllipsisModal,
    setIsOpen: setIsEllipsisOpen,
  } = useModal()
  const {
    isOpen: isDeleteCommentModalOpen,
    openModal: openDeleteCommentModal,
    closeModal: closeDeleteCommentModal,
  } = useModal()
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
  const {
    onReplySubmit,
    isEditing,
    isReplying,
    onClickLikeButton,
    onCommentSubmit,
    onClickComment,
    onClickEllipsisEditButton,
    toggleReplying,
    replyList,
  } = useComment({
    postId,
    commentId,
    memberName,
    isPostAuthor,
    currentPage,
    setCommentFocus,
    setCommentValue,
    setReplyValue,
    isAuthor,
    closeEllipsisModal,
    content,
  })
  const ref = useDetectClickOutside({ isOpen: isEllipsisOpen, setIsOpen: setIsEllipsisOpen })
  return (
    <>
      <s.Comment>
        {/* 내가 작성한 댓글만 수정, 삭제 가능함 */}
        {isAuthor && !isEditing && <s.EllipsisButton onClick={toggleEllipsisModal} $isEllipsisOpen={isEllipsisOpen} />}
        {isEllipsisOpen && (
          <s.EllipsisModal onClick={(e) => e.stopPropagation()} ref={ref}>
            <s.EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</s.EllipsisEditButton>
            <s.EllipsisDeleteButton onClick={openDeleteCommentModal}>삭제</s.EllipsisDeleteButton>
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
            <s.CommentContent onClick={onClickComment} className={isAuthor ? 'mypage_comment' : ''}>
              {content}
            </s.CommentContent>
          )}
          <s.ReplyButton type="button" onClick={toggleReplying}>
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
      </s.Comment>
      {isReplying && (
        <>
          {replyList?.map((reply) => (
            <Reply key={reply.commentId} {...reply} parentCommentId={commentId} />
          ))}
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
        </>
      )}
    </>
  )
}
export default React.memo(Comment)
