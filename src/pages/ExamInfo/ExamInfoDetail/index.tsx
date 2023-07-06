import { FC, useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'
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

  const [examInfoDetail, setExamInfoDetail] = useState<ResponsePostType>()

  useEffect(() => {
    checkPost({
      postId: +postId,
    }).then((res) => {
      const newExamInfoDetail = res as ResponsePostType
      setExamInfoDetail(newExamInfoDetail)
    })
  }, [])
  return (
    <Root>
      <TitleTypoWrapper>
        <TagWrapper>
          <Tag>{examInfoDetail?.postTagList[0]}</Tag>
        </TagWrapper>
        <TitleTypo>{examInfoDetail?.title}</TitleTypo>
        <UpdatedDate>{examInfoDetail?.updatedAt}</UpdatedDate>
      </TitleTypoWrapper>
      <Content>
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
      </Content>
      <CommentWrapper>
        <CommentTitle>
          댓글 <CommentCount>{examInfoDetail?.commentCount}</CommentCount>개
        </CommentTitle>
        {/* 댓글 컴포넌트 만들고 Map으로 받아오기 */}
      </CommentWrapper>
    </Root>
  )
}
