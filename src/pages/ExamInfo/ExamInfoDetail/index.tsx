import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  CommentBox,
  CommentBoxWrapper,
  CommentContainer,
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
  LeftTypoWrapper,
  RightTypoWrapper,
  PostOwnerNickname,
  EditTypo,
  DeleteTypo,
  UpperTypoWrapper,
  DistributionLine,
} from './styled'

import hollowLikeImg from 'assets/images/like_button_hollow.png'
import scrapImg from 'assets/images/scrap.png'
import { useLoaderData, useParams } from 'react-router-dom'
import { ResponsePostType } from 'api/common/commonType'
import { checkPost } from 'api/post/checkPost'
import { deserializeContent } from 'utils/wysiwyg'
import { CheckImg } from 'styled'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { createComment } from 'api/comment/createComment'
import { ExamInfoComment } from 'components/ExamInfo/ExamInfoComment'
import { UserNickname } from 'components/ExamInfo/ExamInfoComment/styled'
import { RemoveCommentResponseProps, removeComment } from 'api/comment/removeComment'

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
  const deleteComment = (id: number) => (): void => {
    removeComment({ commentId: id }).then((res) => {
      if (res) setCommentList((prev) => prev?.filter((comment) => comment.commentId !== id))
    })
  }
  const onClickRegisterButton = (): void => {
    //api 날리기
    createComment({
      content: commentInput,
      postId: +postId,
    })
    if (commentList)
      setCommentList((prev) =>
        prev?.concat({
          commentId: commentList[0].commentId + 1, //정렬 바뀌면 바뀔수도
          content: commentInput,
          isAuthor: true, //사용자id === 글쓴이id
          likeCount: 0,
          memberName: '사용자 닉네임',
          updatedAt: '현재 시각',
        })
      )
  }
  useEffect(() => {
    checkPost({ postId: +postId }).then((res) => {
      setExamInfoDetail(res as ResponsePostType)
    })
    findAllComments({
      pages: 0,
      postId: +postId,
    }).then((res: any) => {
      setCommentList(res.commentDtoList as FindAllCommentsResponseProps[])
    })
  }, [])

  return (
    <Root>
      <UpperTypoWrapper>
        <LeftTypoWrapper>
          <TagWrapper>
            {examInfoDetail?.postTagList.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagWrapper>
          <TitleTypoWrapper>
            <TitleTypo>{examInfoDetail?.title}</TitleTypo>
            <UpdatedDate>{examInfoDetail?.updatedAt}</UpdatedDate>
          </TitleTypoWrapper>
        </LeftTypoWrapper>
        <RightTypoWrapper>
          <PostOwnerNickname>{examInfoDetail?.nickname}</PostOwnerNickname>
          <EditTypo>수정</EditTypo>
          <DistributionLine />
          <DeleteTypo>삭제</DeleteTypo>
        </RightTypoWrapper>
      </UpperTypoWrapper>

      <ContentWrapper>
        {examInfoDetail && <div dangerouslySetInnerHTML={{ __html: deserializeContent(examInfoDetail.content) }} />}
        <IconContainer>
          <IconCountWrapper>
            <Icon alt="like_icon" src={hollowLikeImg} />
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
          댓글 <CommentCount>{commentList?.length}</CommentCount>개
        </CommentTitle>
        <CommentContainer>
          {commentList?.map((comment) => (
            <ExamInfoComment
              key={comment.commentId}
              commentId={comment.commentId}
              isAuthor={comment.isAuthor}
              likeCount={comment.likeCount}
              memberName={comment.memberName}
              updatedAt={comment.updatedAt}
              content={comment.content}
              deleteComment={deleteComment(comment.commentId)}
            />
          ))}
        </CommentContainer>
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
