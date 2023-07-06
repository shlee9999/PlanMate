import { FC } from 'react'
import {
  Icon,
  IconContainer,
  IconCountWrapper,
  InfoTypo,
  NickName,
  Root,
  TitleTypo,
  TypoWrapper,
  UpdatedDate,
} from './styled'

import commentImg from 'assets/images/comment.png'
import likeImg from 'assets/images/like.png'
import scrapImg from 'assets/images/scrap.png'
import { ResponsePostType } from 'api/common/commonType'

type ExamInfoItemProps = ResponsePostType
/**
 * @title
 * @like
 * @scrap 스크랩 개수
 * @comment_count 댓글 개수
 * @nickname owner_id?
 * @updated_at (업데이트 시간)
 */
export const ExamInfoItem: FC<ExamInfoItemProps> = ({
  commentCount,
  content,
  likeCount,
  nickname,
  postId,
  postTagList,
  scrapCount,
  title,
  updatedAt,
}) => {
  return (
    <Root>
      <TypoWrapper>
        <TitleTypo>{title}</TitleTypo>
        <InfoTypo>
          <NickName>{nickname}</NickName>
          <UpdatedDate>{updatedAt}</UpdatedDate>
        </InfoTypo>
      </TypoWrapper>
      <IconContainer>
        <IconCountWrapper>
          <Icon alt="comment_icon" src={commentImg} />
          {commentCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <Icon alt="like_icon" src={likeImg} />
          {likeCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <Icon alt="scrap_icon" src={scrapImg} />
          {scrapCount}
        </IconCountWrapper>
      </IconContainer>
    </Root>
  )
}
