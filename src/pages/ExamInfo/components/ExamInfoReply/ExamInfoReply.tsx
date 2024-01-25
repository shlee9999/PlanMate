import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { ResponseCommentType } from 'api/types'
import { editComment } from 'api/comment/editComment'
import { useNavigate } from 'react-router-dom'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import * as s from './styled'
import useLikeReplyMutation from 'pages/ExamInfo/hooks/mutations/comment/useLikeReplyMutation'
import { DeleteCommentModal } from '..'

type ExamInfoReplyProps = {
  // currentPage: number
  parentCommentId: number
} & ResponseCommentType

export const ExamInfoReply: FC<ExamInfoReplyProps> = ({
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
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const closeEllipsisModal = (): void => isEllipsisOpen && setIsEllipsisOpen(false)
  // eslint-disable-next-line
  const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(content)
  const [currentContent, setCurrentContent] = useState<string>(content)
  const navigate = useNavigate()
  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }
  const inputRef = useRef(null)
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()
  const onClickEllipsisDeleteButton = (): void => setIsDeleteCommentModalOpen(true)
  const mutateLikeReply = useLikeReplyMutation()
  const onClickLikeButton = () => mutateLikeReply({ commentId, parentCommentId }) //like api

  // eslint-disable-next-line
  const closeDeleteCommentModal = () => setIsDeleteCommentModalOpen(false)
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) return
      e.preventDefault()
      editComment({
        commentId: commentId,
        content: inputValue,
      }).then((res) => {
        if (res) {
          setCurrentContent(inputValue)
          setIsEditing(false)
        }
      })
    }
  }
  const onClickEllipsisEditButton = () => {
    setIsEditing(true)
    closeEllipsisModal()
  }

  //* 마이페이지에서 봤을 때 본인이 쓴 댓글이면 해당 포스트로 이동한다.
  const onClickComment = () => isAuthor && navigate(`/examinfo/detail/${postId}`)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  return (
    <>
      <s.Root onClick={closeEllipsisModal}>
        <s.ReplyMark />
        {isAuthor && <s.EllipsisButton onClick={toggleEllipsisModal}></s.EllipsisButton>}
        {isEllipsisOpen && (
          <s.EllipsisModal onClick={onClickModal}>
            <s.EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</s.EllipsisEditButton>
            <s.EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</s.EllipsisDeleteButton>
          </s.EllipsisModal>
        )}
        <s.LeftContainer>
          <s.UpperTypoWrapper>
            <s.CommentOwnerNickname>{memberName}</s.CommentOwnerNickname>
            {isPostAuthor && <s.AuthorIcon>글쓴이</s.AuthorIcon>}
            <s.Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.Date>
          </s.UpperTypoWrapper>
          {isEditing ? (
            <s.EditInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} ref={inputRef} />
          ) : (
            <s.Comment onClick={onClickComment} className={isAuthor ? '' : 'mypage_comment'}>
              {currentContent}
            </s.Comment>
          )}
        </s.LeftContainer>
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
