import React, { FC, useState } from 'react'
import {
  AuthorIcon,
  Comment,
  CommentOwnerNickname,
  Date,
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
import { removeComment } from 'api/comment/removeComment'

type ExamInfoCommentProps = {
  commentId: number
  isAuthor: boolean
  likeCount: number
  memberName: string
  updatedAt: string
  content: string
  deleteComment: () => void
}

export const ExamInfoComment: FC<ExamInfoCommentProps> = ({
  commentId,
  isAuthor,
  likeCount,
  memberName,
  updatedAt,
  content, //댓글임
  deleteComment,
}) => {
  //대댓글 로직
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const closeEllipsisModal = (): void => {
    if (isEllipsisOpen) setIsEllipsisOpen(false)
  }
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(likeCount)
  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const onClickEllipsisDeleteButton = (): void => {
    deleteComment()
    //total개수 하나 줄여야 함
  }
  const onClickLikeButton = (): void => {
    //api 추가해야함
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
  }
  return (
    <Root onClick={closeEllipsisModal}>
      <EllipsisButton onClick={toggleEllipsisModal}></EllipsisButton>
      {isEllipsisOpen && (
        <EllipsisModal onClick={onClickModal}>
          <EllipsisEditButton>수정</EllipsisEditButton>
          <EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</EllipsisDeleteButton>
        </EllipsisModal>
      )}
      <LeftContainer>
        <UpperTypoWrapper>
          <CommentOwnerNickname>{memberName}</CommentOwnerNickname>
          {isAuthor && <AuthorIcon>글쓴이</AuthorIcon>}
          <Date>{updatedAt}</Date>
        </UpperTypoWrapper>
        <Comment>{content}</Comment>
        <ReplyButton>답글</ReplyButton>
      </LeftContainer>
      <LikeButton onClick={onClickLikeButton}>
        <LikeImg isLiked={isLiked} />
        {currentLikeCount}
      </LikeButton>
    </Root>
  )
}
