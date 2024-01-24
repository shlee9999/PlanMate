import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { ResponseCommentType } from 'api/types'
import { likeComment } from 'api/comment/likeComment'
import { editComment } from 'api/comment/editComment'
import { useNavigate } from 'react-router-dom'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import * as s from './styled'

type ExamInfoReplyProps = {
  deleteComment?: () => void
} & ResponseCommentType

export const ExamInfoReply: FC<ExamInfoReplyProps> = ({
  commentId,
  isPostAuthor: isAuthor,
  isMyHearted,
  likeCount: initialLikeCount,
  memberName,
  updatedAt,
  content,
  deleteComment,
  postId,
}) => {
  //대댓글 로직
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(isMyHearted)
  const closeEllipsisModal = (): void => isEllipsisOpen && setIsEllipsisOpen(false)
  // eslint-disable-next-line
  const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState<boolean>(false)
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(initialLikeCount)
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

  const onClickLikeButton = (): void => {
    likeComment({ commentId: commentId }) //like api
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
  }
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

  const onClickComment = () => {
    if (deleteComment) return
    //mypage에서
    navigate(`/examinfo/detail/${postId}`)
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  return (
    <>
      <s.Root onClick={closeEllipsisModal}>
        <s.ReplyMark />
        {deleteComment && <s.EllipsisButton onClick={toggleEllipsisModal}></s.EllipsisButton>}
        {isEllipsisOpen && (
          <s.EllipsisModal onClick={onClickModal}>
            <s.EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</s.EllipsisEditButton>
            <s.EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</s.EllipsisDeleteButton>
          </s.EllipsisModal>
        )}
        <s.LeftContainer>
          <s.UpperTypoWrapper>
            <s.CommentOwnerNickname>{memberName}</s.CommentOwnerNickname>
            {isAuthor && <s.AuthorIcon>글쓴이</s.AuthorIcon>}
            <s.Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.Date>
          </s.UpperTypoWrapper>
          {isEditing ? (
            <s.EditInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} ref={inputRef} />
          ) : (
            <s.Comment onClick={onClickComment} className={deleteComment ? '' : 'mypage_comment'}>
              {currentContent}
            </s.Comment>
          )}
        </s.LeftContainer>
        <s.LikeButton onClick={onClickLikeButton}>
          <HeartIcon fill={isLiked ? `${HEART_COLOR}` : 'none'} />
          {currentLikeCount}
        </s.LikeButton>
        {/* <DeleteCommentModal closeModal={closeDeleteCommentModal} isOpen={isDeleteCommentModalOpen} /> */}
      </s.Root>
    </>
  )
}
