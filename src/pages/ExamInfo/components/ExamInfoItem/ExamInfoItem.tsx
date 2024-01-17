import { FC } from 'react'
import {
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
export const ExamInfoItem: FC<ExamInfoItemProps> = (props) => {
  const navigate = useNavigate()
  const onClickTitle = (): void => {
    if (props.postId)
      navigate(`/examinfo/detail/${props.postId}`, {
        state: { ...props },
      })
    else
      navigate(`/examinfo/detail/${props.noticeId}`, {
        state: { ...props },
      })
  }

  return (
    <Root>
      <TypoWrapper>
        <TitleTypo onClick={onClickTitle}>{props.title}</TitleTypo>
        <InfoTypo>
          <NickName>{props.nickname}</NickName>
          <UpdatedDate>{props.createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -9)}</UpdatedDate>
        </InfoTypo>
      </TypoWrapper>
      <IconContainer>
        <IconCountWrapper>
          <CommentIcon />
          {props.commentCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <HeartIcon fill={props.isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {props.likeCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <ScrapIcon fill={props.isMyScraped ? `${SCRAP_COLOR}` : 'none'} />
          {props.scrapCount}
        </IconCountWrapper>
      </IconContainer>
    </Root>
  )
}
