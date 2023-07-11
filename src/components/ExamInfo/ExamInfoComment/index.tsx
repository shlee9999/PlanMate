import { FC, useEffect } from 'react'
import {
  Comment,
  CommentOwnerNickname,
  Date,
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
  return (
    <Root>
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
