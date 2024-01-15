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
import { likePost } from 'api/post/likePost'
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
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getKoreanISOString } from 'utils/helper'
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
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
type LocationState = ResponsePostType
export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const target = useRef(null)
  const location = useLocation()
  const { postTagList, nickname, postId, title, createdAt } = location.state as LocationState
  const { data: detailData, isLoading: isDetailLoading } = useQuery<CheckPostResponseProps>(
    ['detailData', postId],
    () => checkPost({ postId })
  )

  if (!postId) return <Root>Error!</Root>
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  // const { data: detailData, isLoading: isDetailLoading } = useQuery<
  //   Promise<CheckPostResponseProps>,
  //   Error,
  //   CheckPostResponseProps,
  //   string[]
  // >(['detailData'], () => checkPost({ postId }))
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: commentData, isLoading: isCommentLoading } = useQuery<
    Promise<FindAllCommentsResponseProps>,
    Error,
    FindAllCommentsResponseProps,
    string[]
  >(['commentData', currentPage + ''], () => findAllComments({ pages: currentPage - 1, postId }))
  const queryClient = useQueryClient()

  const { mutate: mutateLikePost } = useMutation((id: number) => likePost({ postId: id }), {
    onMutate: () => {
      const previousData = queryClient.getQueryData<CheckPostResponseProps>(['detailData', postId])
      queryClient.setQueryData(['detailData', postId], (old: CheckPostResponseProps) => ({
        ...old,
        isMyHearted: !old.isMyHearted,
        likeCount: old.isMyHearted ? old.likeCount - 1 : old.likeCount + 1,
      }))

      return { previousData }
    },
    onSuccess: () => console.log('toggle post!'),
    onError: (err, variables, context) => {
      console.error(err)
      queryClient.setQueryData(['detailData', postId], context.previousData)
    },
  })

  const { mutate: mutateCreateComment } = useMutation(() => createComment({ content: commentInput, postId }), {
    onMutate: async () => {
      const previousComments = queryClient.getQueryData(['commentData', currentPage + ''])
      queryClient.setQueryData(['commentData', currentPage + ''], (old: FindAllCommentsResponseProps) => ({
        ...old,
        commentDtoList: [
          ...old.commentDtoList,
          {
            commentId: new Date().getTime,
            content: commentInput,
            isAuthor: false,
            isMyHearted: false,
            likeCount: 0,
            memberName: userAuthInfo.name,
            updatedAt: getKoreanISOString(new Date()), //시간차 있을듯
            postId,
          },
        ],
      }))

      return { previousComments }
    },
    onError: (err, newComment, context) => {
      // 오류 발생 시 원래 상태로 복원
      queryClient.setQueryData(['commentData', currentPage + ''], context.previousComments)
    },
    onSuccess: () => {
      // 성공 시 추가 조치 필요 없음 (옵셔널: 새 댓글 목록을 다시 가져올 수 있음)
      queryClient.invalidateQueries(['commentData', currentPage + ''])
    },
  })
  const commentList = commentData?.commentDtoList
  const totalPage = commentData?.totalPages
  const [currentContent, setCurrentContent] = useState<string>(detailData?.content)
  const [commentInput, setCommentInput] = useState<string>('')
  const navigate = useNavigate()
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentInput(event.target.value)
  }
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
    // createComment({
    //   content: commentInput,
    //   postId: +postId,
    // }).then((res1) => {
    //   findAllComments({
    //     pages: 0,
    //     postId: +postId,
    //   }).then((res2: unknown) => {
    //     const response = res2 as FindAllCommentsResponseProps
    //     setCommentInput('')
    //     setCurrentPage(0)
    //   })
    // })
    mutateCreateComment()
    setCommentInput('')
  }
  const closeDeletePostModal = () => {
    setIsDeletePostModalOpen(false)
  }
  const onClickLikeButton = () => {
    // mutateLikePost(postId)
    console.log('click')
    mutateLikePost(postId)
    // likePost({ postId }).then((res) => console.log(res))
  }
  const onClickScrapButton = () => {
    scrapPost({ postId: postId })
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

  // useEffect(() => {
  //   checkPost({ postId: +postId }).then((res) => {
  //     const response = res as CheckPostResponseProps
  //     setExamInfoDetail(response)
  //   })
  //   if (currentPage <= 1 || currentPage > totalPage) return
  //   findAllComments({
  //     pages: currentPage - 1,
  //     postId: +postId,
  //   }).then((res: unknown) => {
  //     const response = res as FindAllCommentsResponseProps
  //     setCommentList((prev) => prev.concat(response.commentDtoList))
  //     setTotalPage(response.totalPages)
  //   })
  // }, [currentPage, totalPage])

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

      {commentList?.length !== 0 && (
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
          댓글 <CommentCount>{detailData?.commentCount}</CommentCount>개
        </CommentTitle>
        <CommentContainer className={commentList?.length !== 0 ? '' : 'no_content'}>
          {commentList?.length !== 0 ? (
            commentList?.map((comment, index) => (
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
