import { FC } from 'react'
import {
  Icon,
  IconCount,
  IconWrapper,
  ImgInfoWrapper,
  InfoTypo,
  NickName,
  Root,
  TitleTypo,
  TypoWrapper,
  UpdatedDate,
} from './styled'

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
 *
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
      <IconWrapper>
        <ImgInfoWrapper>
          <Icon alt="comment_icon" />
          <IconCount>{comment_count}</IconCount>
        </ImgInfoWrapper>
        <ImgInfoWrapper>
          <Icon alt="like_icon" />
          <IconCount>{like}</IconCount>
        </ImgInfoWrapper>
        <ImgInfoWrapper>
          <Icon alt="scrap_icon" />
          <IconCount>{scrap}</IconCount>
        </ImgInfoWrapper>
      </IconWrapper>
    </Root>
  )
}
