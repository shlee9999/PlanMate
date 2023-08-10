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
import { ResponseCommentType } from 'api/common/commonType'
import { likeComment } from 'api/comment/likeComment'
import { ReplyMark } from '../ExamInfoComment/styled'

type ExamInfoReplyProps = {
  deleteComment: () => void
} & ResponseCommentType

export const ExamInfoReply: FC<ExamInfoReplyProps> = ({
  commentId,
  isAuthor,
  isMyHearted,
  likeCount: initialLikeCount,
  memberName,
  updatedAt,
  content, //댓글임
  postId,
  deleteComment,
}) => {
  //대댓글 로직
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(isMyHearted)
  const closeEllipsisModal = (): void => {
    if (isEllipsisOpen) setIsEllipsisOpen(false)
  }
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(initialLikeCount)
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
    likeComment({ commentId: commentId }) //like api
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
  }
  useEffect(() => {
    return () => {
      // Cleanup function runs at unmount.
      if (currentLikeCount !== initialLikeCount) {
        likeComment({ commentId: commentId }).then((res) => {
          console.log(res)
        })
      }
    }
  }, []) // Empty dependencies so the effect only runs at mount and cleanup at unmount.

  return (
    <Root onClick={closeEllipsisModal}>
      <ReplyMark />
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
      </LeftContainer>
      <LikeButton onClick={onClickLikeButton}>
        <LikeImg isLiked={isLiked} />
        {currentLikeCount}
      </LikeButton>
    </Root>
  )
}
