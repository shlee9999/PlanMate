import { FC } from 'react'
import {
  CommentCount,
  CommentTitle,
  CommentWrapper,
  Content,
  Icon,
  IconContainer,
  IconCountWrapper,
  Root,
  Tag,
  TagWrapper,
  TitleTypo,
  TitleTypoWrapper,
  UpdatedDate,
} from './styled'

import likeImg from 'assets/images/like.png'
import scrapImg from 'assets/images/scrap.png'

type ExamInfoDetailProps = {
  title: string
  like: number
  scrap: number
  commentList: string
  nickname: string
  updated_at: string
  tagList: Array<string>
  content: string
}

/**
 * @title
 * @like
 * @scrap 스크랩 개수
 * @commentList 댓글 내용
 * @nickname owner_id?
 * @updated_at 업데이트 시간
 * @content 게시물 내용
 * @tagList 태그 리스트
 */

export const ExamInfoDetailPage: FC<ExamInfoDetailProps> = ({
  title,
  like,
  scrap,
  commentList,
  nickname,
  updated_at,
  tagList,
  content,
}) => {
  return (
    <Root>
      <TitleTypoWrapper>
        <TagWrapper>
          <Tag>{tagList[0]}</Tag>
        </TagWrapper>
        <TitleTypo>{title}</TitleTypo>
        <UpdatedDate>{updated_at}</UpdatedDate>
      </TitleTypoWrapper>
      <Content>
        {content}
        <IconContainer>
          <IconCountWrapper>
            <Icon alt="like_icon" src={likeImg} />
            {like}
          </IconCountWrapper>
          <IconCountWrapper>
            <Icon alt="scrap_icon" src={scrapImg} />
            {scrap}
          </IconCountWrapper>
        </IconContainer>
      </Content>
      <CommentWrapper>
        <CommentTitle>
          댓글 <CommentCount>{commentList.length}</CommentCount>개
        </CommentTitle>
        {/* 댓글 컴포넌트 만들고 Map으로 받아오기 */}
      </CommentWrapper>
    </Root>
  )
}
