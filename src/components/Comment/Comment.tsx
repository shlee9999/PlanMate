import * as s from './styled'
import React from 'react'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import { DeleteCommentModal } from 'pages/ExamInfo/components'
import { MAX_COMMENT_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { ResponseCommentType } from 'api/types'
import { Reply, SmallEllipsisModal } from 'components'
import { useForm, useModal } from 'hooks'
import { useComment } from './useComment'
import { useDetectClickOutside } from 'hooks/useDetectClickOutside'
import { ReplyForm } from './ReplyForm'
import { useMatch } from 'react-router-dom'

type CommentProps = {
  currentPage: number
} & ResponseCommentType

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
  const { isOpen: isEllipsisOpen, closeModal: closeEllipsisModal, toggleModal: toggleEllipsisModal } = useModal()
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
    currentPage,
    setCommentFocus,
    setCommentValue,
    isAuthor,
    closeEllipsisModal,
    content,
  })
  const isMyPage = useMatch('/mypage')
  return (
    <>
      <s.Comment $isMyPage={isMyPage ? true : false}>
        {/* 내가 작성한 댓글만 수정, 삭제 가능함 */}
        {isAuthor && !isEditing && !isMyPage && (
          <s.EllipsisButton onClick={toggleEllipsisModal} $isEllipsisOpen={isEllipsisOpen} />
        )}
        <SmallEllipsisModal
          itemList={[
            {
              name: '수정',
              onClick: onClickEllipsisEditButton,
            },
            {
              name: '삭제',
              onClick: openDeleteCommentModal,
            },
          ]}
          isOpen={isEllipsisOpen}
          closeModal={closeEllipsisModal}
        />
        <s.CommentEditForm onSubmit={handleCommentSubmit(onCommentSubmit)} $isMyPage={isMyPage ? true : false}>
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
          {!isMyPage && (
            <s.ReplyButton type="button" onClick={toggleReplying}>
              답글 <s.ReplyCount>{replyList.length}</s.ReplyCount>
            </s.ReplyButton>
          )}
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
          <ReplyForm memberName={memberName} isPostAuthor={isPostAuthor} postId={postId} parentCommentId={commentId} />
        </>
      )}
    </>
  )
}
export default React.memo(Comment)
