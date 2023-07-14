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
  IconContainer,
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
  LikeButton,
  LikeImg,
  ScrapImg,
  ScrapButton,
  UserNickname,
} from './styled'

import { useLoaderData, useParams } from 'react-router-dom'
import { ResponseCommentType, ResponsePostType } from 'api/common/commonType'
import { checkPost } from 'api/post/checkPost'
import { deserializeContent } from 'utils/wysiwyg'
import { CheckImg } from 'styled'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { createComment } from 'api/comment/createComment'
import { ExamInfoComment } from 'components/ExamInfo/ExamInfoComment'
import { removeComment } from 'api/comment/removeComment'
import { Pagination } from 'components/ExamInfo/Pagination'
import { likePost } from 'api/post/likePost'
import { scrapPost } from 'api/post/scrapPost'
import hollowLikeImg from 'assets/images/like_button_hollow.png'
import filledLikeImg from 'assets/images/like_button_filled.png'
import hollowScrapImg from 'assets/images/scrap_button_filled.png'
import filledScrapImg from 'assets/images/scrap_button_hollow.png'
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
  const [examInfoDetail, setExamInfoDetail] = useState<ResponsePostType>({
    commentCount: 0,
    title: '예시',
    likeCount: 5,
    scrapCount: 2,
    nickname: '닉네임',
    postId: -1,
    postTagList: ['태그1'],
    updatedAt: '2023-06-12',
    content: '',
    isMyHearted: false,
    isMyScraped: false,
  })
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(0)
  const [currentScrapCount, setCurrentScrapCount] = useState<number>(0)
  const [isScrapped, setIsScrapped] = useState<boolean>(false)
  const [commentList, setCommentList] = useState<ResponseCommentType[]>([])
  const [commentInput, setCommentInput] = useState<string>('')
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentInput(event.target.value)
  }
  const deleteComment = (id: number) => (): void => {
    removeComment({ commentId: id }).then((res) => {
      if (res) setCommentList((prev) => prev?.filter((comment) => comment.commentId !== id))
    })
    //댓글 total 개수 하나 줄여야 함
  }
  const loadPrevPage = (): void => {
    if (currentPage >= 1) setCurrentPage((prev) => prev - 1)
  }
  const loadNextPage = (): void => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1)
  }
  const handleCurrentPage = (page: number) => (): void => {
    setCurrentPage(page)
  }

  const onClickRegisterButton = (): void => {
    //api 날리기
    createComment({
      content: commentInput,
      postId: +postId,
    })
    setCommentList((prev) =>
      [
        {
          commentId: prev[0].commentId + 1, //may change if sorting changes
          content: commentInput,
          isAuthor: true, //userid === authorid
          isMyHearted: false,
          likeCount: 0,
          memberName: 'User Nickname',
          updatedAt: 'current time',
        },
      ].concat(prev)
    )
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const onClickLikeButton = () => {
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
    likePost({ postId: examInfoDetail.postId }).then((res) => {
      console.log(res)
    })
  }
  const onClickScrapButton = () => {
    if (isScrapped) {
      setIsScrapped(false)
      setCurrentScrapCount((prev) => prev - 1)
    } else {
      setIsScrapped(true)
      setCurrentScrapCount((prev) => prev + 1)
    }
    scrapPost({ postId: examInfoDetail.postId }).then((res) => {
      console.log(res)
    })
  }
  useEffect(() => {
    checkPost({ postId: +postId }).then((res) => {
      const response = res as ResponsePostType
      setExamInfoDetail(response)
      setIsLiked(response.isMyHearted)
      setCurrentLikeCount(response.likeCount)
      setIsScrapped(response.isMyScraped)
      setCurrentScrapCount(response.scrapCount)
    })

    findAllComments({
      pages: currentPage - 1,
      postId: +postId,
    }).then((res: unknown) => {
      const response = res as FindAllCommentsResponseProps
      setCommentList(response.commentDtoList as ResponseCommentType[])
      setTotalPage(response.totalPages)
    })
  }, [currentPage])
  // useEffect(() => {}, [examInfoDetail])

  return (
    <Root>
      <UpperTypoWrapper>
        <LeftTypoWrapper>
          <TagWrapper>
            {examInfoDetail.postTagList.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagWrapper>
          <TitleTypoWrapper>
            <TitleTypo>{examInfoDetail.title}</TitleTypo>
            <UpdatedDate>{examInfoDetail.updatedAt}</UpdatedDate>
          </TitleTypoWrapper>
        </LeftTypoWrapper>
        <RightTypoWrapper>
          <PostOwnerNickname>{examInfoDetail.nickname}</PostOwnerNickname>
          <EditTypo>수정</EditTypo>
          <DistributionLine />
          <DeleteTypo>삭제</DeleteTypo>
        </RightTypoWrapper>
      </UpperTypoWrapper>

      <ContentWrapper>
        {examInfoDetail.content === '' ? (
          '빈 콘텐츠'
        ) : (
          <div dangerouslySetInnerHTML={{ __html: deserializeContent(examInfoDetail.content) }} />
        )}
        <IconContainer>
          <LikeButton onClick={onClickLikeButton}>
            <LikeImg alt="like_img" src={isLiked ? filledLikeImg : hollowLikeImg} />
            {currentLikeCount}
          </LikeButton>
          <ScrapButton onClick={onClickScrapButton}>
            <ScrapImg alt="scrap_img" src={isScrapped ? filledScrapImg : hollowScrapImg} />
            {currentScrapCount}
          </ScrapButton>
        </IconContainer>
      </ContentWrapper>
      <CommentWrapper>
        <CommentTitle>
          댓글 <CommentCount>{examInfoDetail.commentCount}</CommentCount>개
        </CommentTitle>
        <CommentContainer>
          {commentList.map((comment) => (
            <ExamInfoComment
              key={comment.commentId}
              commentId={comment.commentId}
              isAuthor={comment.isAuthor}
              likeCount={comment.likeCount}
              memberName={comment.memberName}
              updatedAt={comment.updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}
              content={comment.content}
              deleteComment={deleteComment(comment.commentId)}
              isMyHearted={comment.isMyHearted}
            />
          ))}
        </CommentContainer>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onClickLeftArrow={loadPrevPage}
          onClickRightArrow={loadNextPage}
          onClickPageNumber={handleCurrentPage}
        />
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
