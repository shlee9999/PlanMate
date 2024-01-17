import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import {
  AuthorIcon,
  Comment,
  CommentOwnerNickname,
  Date,
  EditInput,
  EllipsisButton,
  EllipsisDeleteButton,
  EllipsisEditButton,
  EllipsisModal,
  LeftContainer,
  LikeButton,
  ReplyMark,
  Root,
  UpperTypoWrapper,
} from './styled'
import { ResponseCommentType } from 'api/common/commonType'
import { likeComment } from 'api/comment/likeComment'
import { modifyComment } from 'api/comment/modifyComment'
import { createChildComment } from 'api/comment/createChildComment'
import { useNavigate } from 'react-router-dom'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'

type ExamInfoReplyProps = {
  deleteComment?: () => void
} & ResponseCommentType

export const ExamInfoReply: FC<ExamInfoReplyProps> = ({
  commentId,
  isAuthor,
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
  const closeEllipsisModal = (): void => {
    if (isEllipsisOpen) setIsEllipsisOpen(false)
  }
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
  const onClickModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const onClickEllipsisDeleteButton = (): void => {
    setIsDeleteCommentModalOpen(true)
  }
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

  const closeDeleteCommentModal = () => {
    setIsDeleteCommentModalOpen(false)
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) return
      e.preventDefault()
      modifyComment({
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
      <Root onClick={closeEllipsisModal}>
        <ReplyMark />
        {deleteComment && <EllipsisButton onClick={toggleEllipsisModal}></EllipsisButton>}
        {isEllipsisOpen && (
          <EllipsisModal onClick={onClickModal}>
            <EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</EllipsisEditButton>
            <EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</EllipsisDeleteButton>
          </EllipsisModal>
        )}
        <LeftContainer>
          <UpperTypoWrapper>
            <CommentOwnerNickname>{memberName}</CommentOwnerNickname>
            {isAuthor && <AuthorIcon>글쓴이</AuthorIcon>}
            <Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</Date>
          </UpperTypoWrapper>
          {isEditing ? (
            <EditInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} ref={inputRef} />
          ) : (
            <Comment onClick={onClickComment} className={deleteComment ? '' : 'mypage_comment'}>
              {currentContent}
            </Comment>
          )}
        </LeftContainer>
        <LikeButton onClick={onClickLikeButton}>
          <HeartIcon fill={isLiked ? `${HEART_COLOR}` : 'none'} />
          {currentLikeCount}
        </LikeButton>
        {/* <DeleteCommentModal closeModal={closeDeleteCommentModal} isOpen={isDeleteCommentModalOpen} /> */}
      </Root>
    </>
  )
}
