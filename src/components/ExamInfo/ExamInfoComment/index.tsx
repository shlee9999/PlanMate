import React, { FC, useEffect, useState } from 'react'
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
}

export const ExamInfoComment: FC<ExamInfoCommentProps> = ({
  commentId,
  isAuthor,
  likeCount,
  memberName,
  updatedAt,
  content, //댓글임
}) => {
  //대댓글 로직
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const closeEllipsisModal = (): void => {
    if (isEllipsisOpen) setIsEllipsisOpen(false)
  }
  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const onClickEllipsisDeleteButton = (): void => {
    removeComment({ commentId: commentId }).then((res) => {
      console.log(res)
    })
  }
  const onClickLikeButton = (): void => {
    setIsLiked((prev) => !prev)
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
        {likeCount}
      </LikeButton>
    </Root>
  )
}
