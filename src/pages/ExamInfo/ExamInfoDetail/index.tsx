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
  EditCompleteButton,
  EditorWrapper,
  Content,
} from './styled'

import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { ResponseCommentType } from 'api/common/commonType'
import { CheckPostResponseProps } from 'api/post/checkPost'
import { deserializeContent, serializeContent } from 'utils/wysiwyg'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { createComment } from 'api/comment/createComment'
import { ExamInfoComment } from 'pages/ExamInfo/components/ExamInfoComment'
import { removeComment } from 'api/comment/removeComment'
import { likePost } from 'api/post/likePost'
import { scrapPost } from 'api/post/scrapPost'
import hollowLikeImg from 'assets/images/like_button_hollow.png'
import filledLikeImg from 'assets/images/like_button_filled.png'
import hollowScrapImg from 'assets/images/scrap_button_hollow.png'
import filledScrapImg from 'assets/images/scrap_button_filled.png'
import { ExamInfoDetailDataType } from 'types'
import { DeletePostModal } from 'pages/ExamInfo/components/DeleteModal/DeletePostModal'
import { removePost } from 'api/post/remove/removePost'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw } from 'draft-js'
import { editPost } from 'api/post/editPost'
import { NoContentDescription } from 'components/NoContentDescription'
import chatImg from 'assets/images/chat.png'
import { NoContentTypo } from 'components/NoContentDescription/styled'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { deleteNotice } from 'api/notice/admin/deleteNotice'
import { editNotice } from 'api/notice/admin/editNotice'
import { sampleExamInfoData } from 'constants/sampleData'
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
type ExamInfoDetailPageProps = {
  mode: string
}
export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const target = useRef(null)
  const { postId } = useParams()
  if (!postId) return <Root>Error!</Root>
  // const data = useLoaderData() as ExamInfoDetailDataType
  const data = sampleExamInfoData
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [examInfoDetail, setExamInfoDetail] = useState<CheckPostResponseProps>(data.checkPostResult)
  const [commentList, setCommentList] = useState<ResponseCommentType[]>(data.findAllCommentsResult.commentDtoList)
  const [totalPage, setTotalPage] = useState<number>(data.findAllCommentsResult.totalPages)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLiked, setIsLiked] = useState<boolean>(data.checkPostResult.isMyHearted)
  const [isScrapped, setIsScrapped] = useState<boolean>(data.checkPostResult.isMyScraped)
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(data.checkPostResult.likeCount)
  const [currentScrapCount, setCurrentScrapCount] = useState<number>(data.checkPostResult.scrapCount)
  const [currentCommentCount, setCurrentCommentCount] = useState<number>(data.checkPostResult.commentCount)
  const [currentContent, setCurrentContent] = useState<string>(examInfoDetail.content)
  const [commentInput, setCommentInput] = useState<string>('')
  const navigate = useNavigate()
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentInput(event.target.value)
  }
  const deleteComment = (id: number) => (): void => {
    removeComment({ commentId: id }).then((res) => {
      setCommentList((prev) => prev?.filter((comment) => comment.commentId !== id))
      setCurrentCommentCount((prev) => prev - 1)
    })
    //댓글 total 개수 하나 줄여야 함
  }

  const deletePost = (): void => {
    if (mode === 'examinfo')
      removePost({
        postId: +postId,
      }).then((res) => {
        navigate(-1)
      })
    else
      deleteNotice({
        noticeId: +postId,
      }).then((res) => {
        navigate(-1)
      })
  }

  const loadNextPage = (): void => {
    setCurrentPage((prev) => prev + 1)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }
  const callback = (entries, observer) => {
    const entry = entries[0]

    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      observer.unobserve(target.current)

      if (currentPage < totalPage) {
        loadNextPage()
      }
    }
  }
  const onClickEditTypo = () => {
    if (isEditing) onClickEditCompleteButton()
    setIsEditing((prev) => !prev)
  }
  const onClickEditCompleteButton = () => {
    // if (mode === 'examinfo')
    //   editPost({
    //     content: serializeContent(editorState),
    //     id: +postId,
    //     tagList: examInfoDetail.postTagList,
    //     title: examInfoDetail.title,
    //   }).then((res) => {
    //     if (res) {
    //       setIsEditing(false)
    //       setCurrentContent(serializeContent(editorState))
    //     }
    //   })
    // else
    //   editNotice({
    //     content: serializeContent(editorState),
    //     noticeId: +postId,
    //     title: examInfoDetail.title,
    //   })
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
        setCurrentCommentCount((prev) => prev + 1)
      })
    })
  }
  const closeDeletePostModal = () => {
    setIsDeletePostModalOpen(false)
  }
  const onClickLikeButton = () => {
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
    likePost({ postId: +postId })
  }
  const onClickScrapButton = () => {
    if (isScrapped) {
      setIsScrapped(false)
      setCurrentScrapCount((prev) => prev - 1)
    } else {
      setIsScrapped(true)
      setCurrentScrapCount((prev) => prev + 1)
    }
    scrapPost({ postId: +postId })
  }
  const onClickDeleteTypo = () => {
    setIsDeletePostModalOpen(true)
  }

  useEffect(() => {
    if (!target.current) return
    const observer = new IntersectionObserver(callback, options)
    setTimeout(() => {
      try {
        observer.observe(target.current)
      } catch (err) {
        return
      }
    }, 1000)
    return () => observer.disconnect()
  }, [currentPage])

  useEffect(() => {
    // checkPost({ postId: +postId }).then((res) => {
    //   const response = res as CheckPostResponseProps
    //   setExamInfoDetail(response)
    //   setIsLiked(response.isMyHearted)ㅌㅈ
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
            <UpdatedDate>{examInfoDetail.createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</UpdatedDate>
          </TitleTypoWrapper>
        </LeftTypoWrapper>
        <RightTypoWrapper>
          <PostOwnerNickname>{examInfoDetail.nickname}</PostOwnerNickname>
          <EditTypo onClick={onClickEditTypo}>수정</EditTypo>
          <DistributionLine />
          <DeleteTypo onClick={onClickDeleteTypo}>삭제</DeleteTypo>
        </RightTypoWrapper>
      </UpperTypoWrapper>

      <ContentWrapper>
        {isEditing ? (
          <EditorWrapper>
            {/* <Editor
              wrapperClassName="wrapper-class"
              editorClassName="editor"
              toolbarClassName="toolbar-class"
              toolbar={{
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: false },
              }}
              placeholder="내용을 작성해주세요"
              localization={{
                locale: 'ko',
              }}
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            /> */}
            <EditCompleteButton onClick={onClickEditCompleteButton} icon="register">
              수정완료
            </EditCompleteButton>
          </EditorWrapper>
        ) : (
          <Content dangerouslySetInnerHTML={{ __html: deserializeContent(currentContent) }} />
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

      {commentList.length !== 0 && (
        <CommentInputWrapper>
          <UserNickname>{userAuthInfo.name}</UserNickname>
          <CommentInput placeholder="댓글을 남겨보세요." onChange={onChange} value={commentInput} />
          <CommentRegisterButton onClick={onClickRegisterButton} icon="register">
            댓글등록
          </CommentRegisterButton>
        </CommentInputWrapper>
      )}
      <CommentWrapper>
        <CommentTitle>
          댓글 <CommentCount>{currentCommentCount}</CommentCount>개
        </CommentTitle>
        <CommentContainer className={commentList.length !== 0 ? '' : 'no_content'}>
          {commentList.length !== 0 ? (
            commentList.map((comment, index) => (
              <ExamInfoComment
                key={comment.commentId}
                commentId={comment.commentId}
                isAuthor={comment.isAuthor}
                likeCount={comment.likeCount}
                memberName={comment.memberName}
                updatedAt={comment.updatedAt}
                content={comment.content}
                deleteComment={deleteComment(comment.commentId)}
                isMyHearted={comment.isMyHearted}
                postId={+postId}
                ref={index === commentList.length - 1 ? target : null}
              />
            ))
          ) : (
            <>
              <NoContentDescription icon="chat">
                <NoContentTypo>아직 댓글이 없어요</NoContentTypo>
                <NoContentTypo>첫 댓글을 남겨볼까요?</NoContentTypo>
              </NoContentDescription>
              <CommentInputWrapper className="no_content">
                <UserNickname>{userAuthInfo.name}</UserNickname>
                <CommentInput placeholder="댓글을 남겨보세요." onChange={onChange} value={commentInput} />
                <CommentRegisterButton onClick={onClickRegisterButton} icon="register">
                  댓글등록
                </CommentRegisterButton>
              </CommentInputWrapper>
            </>
          )}
        </CommentContainer>
      </CommentWrapper>
      {isDeletePostModalOpen && <DeletePostModal closeModal={closeDeletePostModal} deletePost={deletePost} />}
    </Root>
  )
}
