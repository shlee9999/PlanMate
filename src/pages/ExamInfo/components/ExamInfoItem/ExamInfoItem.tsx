import { FC } from 'react'
import { ResponsePostType } from 'api/types'
import { useNavigate } from 'react-router-dom'
import { CommentIcon, HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'
import * as s from './styled'

type ExamInfoItemProps = ResponsePostType

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
    <s.Root>
      <s.TypoWrapper>
        <s.TitleTypo onClick={onClickTitle}>{props.title}</s.TitleTypo>
        <s.InfoTypo>
          <s.NickName>{props.nickname}</s.NickName>
          <s.UpdatedDate>{props.createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -9)}</s.UpdatedDate>
        </s.InfoTypo>
      </s.TypoWrapper>
      <s.IconContainer>
        <s.IconCountWrapper>
          <CommentIcon />
          {props.commentCount}
        </s.IconCountWrapper>
        <s.IconCountWrapper>
          <HeartIcon fill={props.isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {props.likeCount}
        </s.IconCountWrapper>
        <s.IconCountWrapper>
          <ScrapIcon fill={props.isMyScraped ? `${SCRAP_COLOR}` : 'none'} />
          {props.scrapCount}
        </s.IconCountWrapper>
      </s.IconContainer>
    </s.Root>
  )
}
