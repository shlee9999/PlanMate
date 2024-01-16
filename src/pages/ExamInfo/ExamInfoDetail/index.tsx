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
  UserNickname,
  EditCompleteButton,
  EditorWrapper,
  Content,
  Count,
} from './styled'

import { useLocation, useNavigate } from 'react-router-dom'
import { ResponseCommentType, ResponsePostType } from 'api/common/commonType'
import { deserializeContent, serializeContent } from 'utils/wysiwyg'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { createComment } from 'api/comment/createComment'
import { ExamInfoComment } from 'pages/ExamInfo/components/ExamInfoComment'
import { removeComment } from 'api/comment/removeComment'

import { scrapPost } from 'api/post/scrapPost'
import { DeletePostModal } from 'pages/ExamInfo/components/DeleteModal/DeletePostModal'
import { removePost } from 'api/post/remove/removePost'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw } from 'draft-js'
import { editPost } from 'api/post/editPost'
import { NoContentDescription } from 'components/NoContentDescription'
import { NoContentTypo } from 'components/NoContentDescription/styled'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { deleteNotice } from 'api/notice/admin/deleteNotice'
import { editNotice } from 'api/notice/admin/editNotice'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'
import { HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { useQuery } from 'react-query'
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import useLikePostMutation from '../hooks/useLikePostMutation'
import useCreateCommentMutation from '../hooks/useCreateCommentMutation'
import useScrapPostMutation from '../hooks/useScrapPostMutation'
/**
 * @title
 * @like
 * @scrap 스크랩 개수
 * @commentDtoList 댓글 내용
 * @nickname owner_id?
 * @updated_at 업데이트 시간
 * @content 게시물 내용
 * @tagList 태그 리스트
 */
type ExamInfoDetailPageProps = {
  mode: string
}
type LocationState = ResponsePostType
export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const target = useRef(null)
  const location = useLocation()
  const { postTagList, nickname, postId, title, createdAt } = location.state as LocationState
  const { data: detailData, isLoading: isDetailLoading } = useQuery<CheckPostResponseProps>(
    ['detailData', postId],
    () => checkPost({ postId })
  )
  if (!postId) return <Root>Error!</Root>
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: commentData, isLoading: isCommentLoading } = useQuery<FindAllCommentsResponseProps>(
    ['commentData', postId, currentPage + ''],
    () => findAllComments({ pages: currentPage - 1, postId })
  )
  const mutateLikePost = useLikePostMutation()
  const mutateScrapPost = useScrapPostMutation()
  const { commentDtoList, totalCount, totalPages } = isCommentLoading
    ? { commentDtoList: [], totalCount: 0, totalPages: 0 }
    : { ...commentData }
  const [currentContent, setCurrentContent] = useState<string>(detailData?.content || 'Loading...')
  const [commentInput, setCommentInput] = useState<string>('')
  const navigate = useNavigate()
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const mutateCreateComment = useCreateCommentMutation()

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => setCommentInput(event.target.value)
  const deleteComment = (id: number) => (): void => {
    removeComment({ commentId: id })
    //댓글 total 개수 하나 줄여야 함
  }

  const deletePost = (): void => {
    if (mode === 'examinfo')
      removePost({
        postId: postId,
      }).then((res) => {
        navigate(-1)
      })
    else
      deleteNotice({
        noticeId: postId,
      }).then((res) => {
        navigate(-1)
      })
  }
  const loadNextPage = (): void => setCurrentPage((prev) => prev + 1)
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }
  const callback = (entries, observer) => {
    const entry = entries[0]
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      observer.unobserve(target.current)
      if (currentPage < totalPages) loadNextPage()
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
    mutateCreateComment({
      currentPage,
      content: commentInput,
      postId,
      callBack: () => setCommentInput(''),
      isAuthor: userAuthInfo.name === detailData.nickname,
      // id 비교로 변경해야함
      memberName: userAuthInfo.name,
    })
  }
  const closeDeletePostModal = () => setIsDeletePostModalOpen(false)
  const onClickLikeButton = () => mutateLikePost({ postId })
  const onClickScrapButton = () => mutateScrapPost({ postId: postId })
  const onClickDeleteTypo = () => setIsDeletePostModalOpen(true)

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
    if (!isDetailLoading) setCurrentContent(detailData.content)
  }, [isDetailLoading])

  return (
    <Root>
      <UpperTypoWrapper>
        <LeftTypoWrapper>
          <TagWrapper>
            {postTagList?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagWrapper>
          <TitleTypoWrapper>
            <TitleTypo>{title}</TitleTypo>
            <UpdatedDate>{createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</UpdatedDate>
          </TitleTypoWrapper>
        </LeftTypoWrapper>
        <RightTypoWrapper>
          <PostOwnerNickname>{nickname}</PostOwnerNickname>
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
          <HeartIcon fill={detailData?.isMyHearted ? `${HEART_COLOR}` : 'none'} onClick={onClickLikeButton} />
          <Count onClick={onClickLikeButton}>{detailData?.likeCount}</Count>
          <ScrapIcon fill={detailData?.isMyScraped ? `${SCRAP_COLOR}` : 'none'} onClick={onClickScrapButton} />
          <Count onClick={onClickScrapButton}>{detailData?.scrapCount}</Count>
        </IconContainer>
      </ContentWrapper>

      {commentDtoList.length !== 0 && (
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
          댓글 <CommentCount>{totalCount}</CommentCount>개
        </CommentTitle>
        <CommentContainer className={commentDtoList?.length !== 0 ? '' : 'no_content'}>
          {commentDtoList?.length !== 0 ? (
            commentDtoList?.map((comment, index) => (
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
                ref={index === commentDtoList.length - 1 ? target : null}
                currentPage={currentPage}
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
