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
import hollowLikeImg from 'assets/images/like_button_hollow.png'
import filledLikeImg from 'assets/images/like_button_filled.png'
import hollowScrapImg from 'assets/images/scrap_button_hollow.png'
import filledScrapImg from 'assets/images/scrap_button_filled.png'
import { ResponsePostType } from 'api/common/commonType'
import { useNavigate } from 'react-router-dom'

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
          <Icon alt="comment_icon" src={commentImg} />
          {commentCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <Icon alt="like_icon" src={isMyHearted ? filledLikeImg : hollowLikeImg} />
          {likeCount}
        </IconCountWrapper>
        <IconCountWrapper>
          <Icon alt="scrap_icon" src={isMyScraped ? filledScrapImg : hollowScrapImg} />
          {scrapCount}
        </IconCountWrapper>
      </IconContainer>
    </Root>
  )
}
