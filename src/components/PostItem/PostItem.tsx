import { FC } from 'react'
import * as s from './styled'
import { ResponsePostType } from 'api/types'
import { useNavigate } from 'react-router-dom'
import { CommentIcon, HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'

type PostItemProps = ResponsePostType

export const PostItem: FC<PostItemProps> = ({
  commentCount,
  isMyHearted,
  isMyScraped,
  likeCount,
  nickname,
  scrapCount,
  title,
  createdAt,
  postId,
  noticeId,
}) => {
  const navigate = useNavigate()
  const onClickTitle = (): void => {
    if (postId) navigate(`/examinfo/detail/${postId}`)
    else navigate(`/examinfo/detail/${noticeId}`)
  }

  return (
    <s.PostItem>
      <s.TypoWrapper>
        <s.TitleTypo onClick={onClickTitle}>{title}</s.TitleTypo>
        <s.InfoTypo>
          <s.NickName>{nickname}</s.NickName>
          <s.UpdatedDate>{createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -9)}</s.UpdatedDate>
        </s.InfoTypo>
      </s.TypoWrapper>
      <s.IconContainer>
        <s.IconCountWrapper>
          <CommentIcon />
          {commentCount}
        </s.IconCountWrapper>
        <s.IconCountWrapper>
          <HeartIcon fill={isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {likeCount}
        </s.IconCountWrapper>
        <s.IconCountWrapper>
          <ScrapIcon fill={isMyScraped ? `${SCRAP_COLOR}` : 'none'} />
          {scrapCount}
        </s.IconCountWrapper>
      </s.IconContainer>
    </s.PostItem>
  )
}
