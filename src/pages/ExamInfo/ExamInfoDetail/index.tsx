import { FC, useEffect, useState } from 'react'
import {
  CommentCount,
  CommentTitle,
  CommentWrapper,
  ContentWrapper,
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
import { useLoaderData, useParams } from 'react-router-dom'
import { ResponsePostType } from 'api/common/commonType'
import { checkPost } from 'api/post/checkPost'

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

export const ExamInfoDetailPage: FC = () => {
  const { postId } = useParams()
  if (!postId) return <Root>Error!</Root>

  const examInfoDetail: ResponsePostType = useLoaderData() as ResponsePostType

  return (
    <Root>
      <TagWrapper>
        {examInfoDetail?.postTagList.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagWrapper>
      <TitleTypoWrapper>
        <TitleTypo>{examInfoDetail?.title}</TitleTypo>
        <UpdatedDate>{examInfoDetail?.updatedAt}</UpdatedDate>
      </TitleTypoWrapper>
      <ContentWrapper>
        {examInfoDetail?.content}
        <IconContainer>
          <IconCountWrapper>
            <Icon alt="like_icon" src={likeImg} />
            {examInfoDetail?.likeCount}
          </IconCountWrapper>
          <IconCountWrapper>
            <Icon alt="scrap_icon" src={scrapImg} />
            {examInfoDetail?.scrapCount}
          </IconCountWrapper>
        </IconContainer>
      </ContentWrapper>
      <CommentWrapper>
        <CommentTitle>
          댓글 <CommentCount>{examInfoDetail?.commentCount}</CommentCount>개
        </CommentTitle>
        {/* 댓글 컴포넌트 만들고 Map으로 받아오기 */}
      </CommentWrapper>
    </Root>
  )
}
