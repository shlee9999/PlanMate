import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  CommentBox,
  CommentBoxWrapper,
  CommentCount,
  CommentRegisterButton,
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
import { deserializeContent } from 'utils/wysiwyg'
import { CheckImg } from 'styled'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { createComment } from 'api/comment/createComment'
import { ExamInfoComment } from 'components/ExamInfo/ExamInfoComment'
import { CommentOwnerNickname, PostOwnerNickname, UserNickname } from 'components/ExamInfo/ExamInfoComment/styled'

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
  // const examInfoDetail: ResponsePostType = useLoaderData() as ResponsePostType
  const [examInfoDetail, setExamInfoDetail] = useState<ResponsePostType>()
  const [commentList, setCommentList] = useState<FindAllCommentsResponseProps[]>()
  const [commentInput, setCommentInput] = useState<string>('')
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentInput(event.target.value)
  }
  const onClickRegisterButton = (): void => {
    //api 날리기
    createComment({
      content: commentInput,
      postId: +postId,
    })
  }
  useEffect(() => {
    checkPost({ postId: +postId }).then((res) => {
      setExamInfoDetail(res as ResponsePostType)
    })
    findAllComments({
      pages: 0,
      postId: +postId,
    }).then((res) => {
      setCommentList(res as FindAllCommentsResponseProps[]) //현재 405 에러
    })
  }, [])

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
        {examInfoDetail && <div dangerouslySetInnerHTML={{ __html: deserializeContent(examInfoDetail.content) }} />}
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
        {commentList?.map((comment, index) => (
          <ExamInfoComment
            key={index}
            likeCount={comment.likeCount}
            memberName={comment.memberName}
            updatedAt={comment.updatedAt}
            content={comment.content}
          />
        ))}
      </CommentWrapper>
      <CommentBoxWrapper>
        <UserNickname>사용자 닉네임</UserNickname>
        <CommentBox placeholder="댓글을 남겨보세요." onChange={onChange} />
        <CommentRegisterButton onClick={onClickRegisterButton}>
          <CheckImg />
          댓글등록
        </CommentRegisterButton>
      </CommentBoxWrapper>
    </Root>
  )
}
