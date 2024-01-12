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

import { ResponsePostType } from 'api/common/commonType'
import { useNavigate } from 'react-router-dom'
import { CommentIcon, HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'

type ExamInfoItemProps = ResponsePostType
/**
 * @title
 * @like
 * @scrap 스크랩 개수
 * @comment_count 댓글 개수
 * @nickname owner_id?
 * @updated_at (업데이트 시간)x
 */
export const ExamInfoItem: FC<ExamInfoItemProps> = ({
  commentCount,
  likeCount,
  nickname,
  postId,
  noticeId,
  scrapCount,
  title,
  createdAt,
  isMyHearted,
  isMyScraped,
}) => {
  const navigate = useNavigate()
  const onClickTitle = (): void => {
    if (postId) navigate(`/examinfo/detail/${postId}`)
    else navigate(`/examinfo/detail/${noticeId}`)
  }

  return (
    <Root>
      <TypoWrapper>
        <TitleTypo onClick={onClickTitle}>{title}</TitleTypo>
        <InfoTypo>
          <NickName>{nickname}</NickName>
          <UpdatedDate>{createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -9)}</UpdatedDate>
        </InfoTypo>
      </TypoWrapper>
      <IconContainer>
        <IconCountWrapper>
          <CommentIcon />
          {commentCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <HeartIcon fill={isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {likeCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <ScrapIcon fill={isMyScraped ? `${SCRAP_COLOR}` : 'none'} />
          {scrapCount}
        </IconCountWrapper>
      </IconContainer>
    </Root>
  )
}
