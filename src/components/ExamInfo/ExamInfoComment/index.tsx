import React, { FC, useEffect, useState } from 'react'
import {
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

type ExamInfoCommentProps = {
  likeCount: number
  memberName: string
  updatedAt: string
  content: string
}

export const ExamInfoComment: FC<ExamInfoCommentProps> = ({
  likeCount,
  memberName,
  updatedAt,
  content, //댓글임
}) => {
  //대댓글 로직
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const openEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen(true)
    e.stopPropagation()
  }
  const closeEllipsisModal = (): void => {
    setIsEllipsisOpen(false)
  }
  const onClickModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  return (
    <Root onClick={closeEllipsisModal}>
      <EllipsisButton onClick={openEllipsisModal}></EllipsisButton>
      {isEllipsisOpen && (
        <EllipsisModal onClick={onClickModal}>
          <EllipsisEditButton>수정</EllipsisEditButton>
          <EllipsisDeleteButton>삭제</EllipsisDeleteButton>
        </EllipsisModal>
      )}
      <LeftContainer>
        <UpperTypoWrapper>
          <CommentOwnerNickname>{memberName}</CommentOwnerNickname>
          <Date>{updatedAt}</Date>
        </UpperTypoWrapper>
        <Comment>{content}</Comment>
        <ReplyButton>답글</ReplyButton>
      </LeftContainer>
      <LikeButton>
        <LikeImg />
        {likeCount}
      </LikeButton>
    </Root>
  )
}
