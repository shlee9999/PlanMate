import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import {
  CommentInput,
  CommentInputWrapper,
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
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import { deserializeContent } from 'utils/wysiwyg'
import { CheckImg } from 'styled'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { createComment } from 'api/comment/createComment'
import { ExamInfoComment } from 'components/ExamInfo/ExamInfoComment'
import { removeComment } from 'api/comment/removeComment'
import { likePost } from 'api/post/likePost'
import { scrapPost } from 'api/post/scrapPost'
import hollowLikeImg from 'assets/images/like_button_hollow.png'
import filledLikeImg from 'assets/images/like_button_filled.png'
import hollowScrapImg from 'assets/images/scrap_button_hollow.png'
import filledScrapImg from 'assets/images/scrap_button_filled.png'
import { ExamInfoDetailDataType } from 'types'
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
  const target = useRef(null)
  const { postId } = useParams()
  if (!postId) return <Root>Error!</Root>
  const data = useLoaderData() as ExamInfoDetailDataType

  const [examInfoDetail, setExamInfoDetail] = useState<CheckPostResponseProps>(data.checkPostResult)
  const [commentList, setCommentList] = useState<ResponseCommentType[]>(data.findAllCommentsResult.commentDtoList)
  const [totalPage, setTotalPage] = useState<number>(data.findAllCommentsResult.totalPages)
  const [currentPage, setCurrentPage] = useState<number>(1)
  // const [examInfoDetail, setExamInfoDetail] = useState<ResponsePostType>({
  //   commentCount: 0,
  //   title: '예시',
  //   likeCount: 5,
  //   scrapCount: 2,
  //   nickname: '닉네임',
  //   postId: -1,
  //   postTagList: ['태그1'],
  //   updatedAt: '2023-06-12',
  //   content: '',
  //   isMyHearted: false,
  //   isMyScraped: false,
  // })
  const [isLiked, setIsLiked] = useState<boolean>(data.checkPostResult.isMyHearted)
  const [isScrapped, setIsScrapped] = useState<boolean>(data.checkPostResult.isMyScraped)
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(data.checkPostResult.likeCount)
  const [currentScrapCount, setCurrentScrapCount] = useState<number>(data.checkPostResult.scrapCount)
  const [commentInput, setCommentInput] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentInput(event.target.value)
  }
  const deleteComment = (id: number) => (): void => {
    removeComment({ commentId: id }).then((res) => {
      if (res) setCommentList((prev) => prev?.filter((comment) => comment.commentId !== id))
    })
    //댓글 total 개수 하나 줄여야 함
  }

  const loadNextPage = (): void => {
    setCurrentPage((prev) => prev + 1)
  }

  const options = {
    root: null,
    rootMargin: '0px', // root에 마진값을 주어 범위를 확장 가능합니다.
    threshold: 1, // 타겟 요소가 얼마나 들어왔을때 백함수를 실행할 것인지 결정합니다. 1이면 타겟 요소 전체가 들어와야 합니다.
  }
  const callback = (entries, observer) => {
    const entry = entries[0]
    console.log('currentPage : ' + currentPage + '\ntotalPage : ' + totalPage)

    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      observer.unobserve(target.current)

      if (currentPage < totalPage) {
        loadNextPage()
      }
    }
  }

  const onClickRegisterButton = (): void => {
    createComment({
      content: commentInput,
      postId: +postId,
    }).then((res1) => {
      findAllComments({
        pages: 0,
        postId: +postId,
      }).then((res2: unknown) => {
        const response = res2 as FindAllCommentsResponseProps
        setCommentList(response.commentDtoList as ResponseCommentType[])
        setTotalPage(response.totalPages)
        setCommentInput('')
        setCurrentPage(0)
      })
    })
  }

  const onClickLikeButton = () => {
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
    likePost({ postId: examInfoDetail.postId })
  }
  const onClickScrapButton = () => {
    if (isScrapped) {
      setIsScrapped(false)
      setCurrentScrapCount((prev) => prev - 1)
    } else {
      setIsScrapped(true)
      setCurrentScrapCount((prev) => prev + 1)
    }
    scrapPost({ postId: examInfoDetail.postId })
  }
  useEffect(() => {
    if (!target.current) return
    const observer = new IntersectionObserver(callback, options)
    setTimeout(() => {
      observer.observe(target.current)
    }, 1000)
    return () => observer.disconnect()
  }, [currentPage])

  useEffect(() => {
    // checkPost({ postId: +postId }).then((res) => {
    //   const response = res as CheckPostResponseProps
    //   setExamInfoDetail(response)
    //   setIsLiked(response.isMyHearted)
    //   setCurrentLikeCount(response.likeCount)
    //   setIsScrapped(response.isMyScraped)
    //   setCurrentScrapCount(response.scrapCount)
    // })
    if (currentPage <= 1 || currentPage > totalPage) return
    findAllComments({
      pages: currentPage - 1,
      postId: +postId,
    }).then((res: unknown) => {
      const response = res as FindAllCommentsResponseProps
      setCommentList((prev) => prev.concat(response.commentDtoList))

      setTotalPage(response.totalPages)
    })
  }, [currentPage, totalPage])

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
            <UpdatedDate>{examInfoDetail.updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</UpdatedDate>
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
      <CommentInputWrapper>
        <UserNickname>사용자 닉네임</UserNickname>
        <CommentInput placeholder="댓글을 남겨보세요." onChange={onChange} value={commentInput} />
        <CommentRegisterButton onClick={onClickRegisterButton}>
          <CheckImg />
          댓글등록
        </CommentRegisterButton>
      </CommentInputWrapper>
      <CommentWrapper>
        <CommentTitle>
          댓글 <CommentCount>{examInfoDetail.commentCount}</CommentCount>개
        </CommentTitle>
        <CommentContainer>
          {commentList.map((comment, index) => (
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
              ref={index === commentList.length - 1 ? target : null}
            />
          ))}
        </CommentContainer>
      </CommentWrapper>
    </Root>
  )
}
