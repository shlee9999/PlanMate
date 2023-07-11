import { FC, useEffect } from 'react'
import { Comment, Date, LeftContainer, LikeButton, Nickname, ReplyButton, Root, UpperTypoWrapper } from './styled'

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
          <Nickname>{memberName}</Nickname>
          <Date>{updatedAt}</Date>
        </UpperTypoWrapper>
        <Comment>{content}</Comment>
        <ReplyButton />
      </LeftContainer>
      <LikeButton>{likeCount}</LikeButton>
    </Root>
  )
}
