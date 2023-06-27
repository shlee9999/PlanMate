import { FC } from 'react'
import {
  Icon,
  IconCount,
  IconContainer,
  ImgInfoWrapper,
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

type ExamInfoItemProps = {
  title: string
  like: number
  scrap: number
  comment_count: number
  nickname: string
  updated_at: string
}
/**
 * @title
 * @like
 * @scrap (스크랩 개수)
 * @comment_count (댓글 개수)
 * @nickname (owner_id?)
 * @updated_at (업데이트 시간)
 */
export const ExamInfoItem: FC<ExamInfoItemProps> = ({ title, like, scrap, comment_count, nickname, updated_at }) => {
  return (
    <Root>
      <TypoWrapper>
        <TitleTypo>{title}</TitleTypo>
        <InfoTypo>
          <NickName>{nickname}</NickName>
          <UpdatedDate>{updated_at}</UpdatedDate>
        </InfoTypo>
      </TypoWrapper>
      <IconContainer>
        <ImgInfoWrapper>
          <Icon alt="comment_icon" src={commentImg} />
          <IconCount>{comment_count}</IconCount>
        </ImgInfoWrapper>
        <ImgInfoWrapper>
          <Icon alt="like_icon" src={likeImg} />
          <IconCount>{like}</IconCount>
        </ImgInfoWrapper>
        <ImgInfoWrapper>
          <Icon alt="scrap_icon" src={scrapImg} />
          <IconCount>{scrap}</IconCount>
        </ImgInfoWrapper>
      </IconContainer>
    </Root>
  )
}
