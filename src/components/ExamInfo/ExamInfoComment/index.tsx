import React, { ChangeEvent, ForwardRefRenderFunction, forwardRef, useEffect, useRef, useState } from 'react'
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
  LikeImg,
  ReplyButton,
  Root,
  UpperTypoWrapper,
} from './styled'
import { ResponseCommentType } from 'api/common/commonType'
import { likeComment } from 'api/comment/likeComment'
import hollowLikeImg from 'assets/images/like_button_hollow.png'
import filledLikeImg from 'assets/images/like_button_filled.png'
import { DeleteCommentModal } from '../DeleteModal/DeleteCommentModal'
import { modifyComment } from 'api/comment/modifyComment'

type ExamInfoCommentProps = {
  deleteComment: () => void
} & ResponseCommentType

const ExamInfoCommentComponent: ForwardRefRenderFunction<HTMLDivElement, ExamInfoCommentProps> = (
  {
    commentId,
    isAuthor,
    isMyHearted,
    likeCount: initialLikeCount,
    memberName,
    updatedAt,
    content, //댓글임
    deleteComment,
  },
  ref
) => {
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
  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  // useEffect(() => {
  //   return () => {
  //     if (currentLikeCount !== initialLikeCount) {
  //       likeComment({ commentId: commentId })
  //     }
  //   }
  // }, []) // Empty dependencies so the effect only runs at mount and cleanup at unmount.

  return (
    <Root onClick={closeEllipsisModal} ref={ref}>
      <EllipsisButton onClick={toggleEllipsisModal}></EllipsisButton>
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
          <Date>{updatedAt}</Date>
        </UpperTypoWrapper>
        {isEditing ? (
          <EditInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} ref={inputRef} />
        ) : (
          <Comment>{currentContent}</Comment>
        )}
        <ReplyButton>답글</ReplyButton>
      </LeftContainer>
      <LikeButton onClick={onClickLikeButton}>
        <LikeImg alt="like_img" src={isLiked ? filledLikeImg : hollowLikeImg} />
        {currentLikeCount}
      </LikeButton>
      {isDeleteCommentModalOpen && (
        <DeleteCommentModal closeModal={closeDeleteCommentModal} deleteComment={deleteComment} />
      )}
    </Root>
  )
}
export const ExamInfoComment = forwardRef(ExamInfoCommentComponent)
