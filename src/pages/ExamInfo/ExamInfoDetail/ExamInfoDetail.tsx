import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ResponsePostType } from 'api/types'
import { deserializeContent, serializeContent } from 'utils'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw } from 'draft-js'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'
import { HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { useQuery } from 'react-query'
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import {
  useLikePostMutation,
  useCreateCommentMutation,
  useScrapPostMutation,
  useDeletePostMutation,
  useDeleteNoticeMutation,
  useEditNoticeMutation,
  useEditPostMutation,
} from '../hooks/mutations'
import { useObserver } from '../hooks/'
import { NoContentDescription } from 'components'
import { DeletePostModal, ExamInfoComment } from '../components'
import * as s from './styled'

type ExamInfoDetailPageProps = {
  mode: 'examinfo' | 'notice'
}
type LocationState = ResponsePostType

export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const location = useLocation()
  const { postTagList, nickname, postId, title, createdAt } = location.state as LocationState
  const { data: detailData, isLoading: isDetailLoading } = useQuery<CheckPostResponseProps>(
    ['detailData', mode, postId],
    () => checkPost({ postId })
  )
  if (!postId) return <s.Root>Error!</s.Root>
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: commentData, isLoading: isCommentLoading } = useQuery<FindAllCommentsResponseProps>(
    ['commentData', postId, currentPage + ''],
    () => findAllComments({ pages: currentPage - 1, postId })
  )
  const [allComments, setAllComments] = useState([])
  const mutateLikePost = useLikePostMutation()
  const mutateScrapPost = useScrapPostMutation()
  const mutateDeletePost = useDeletePostMutation()
  const mutateDeleteNotice = useDeleteNoticeMutation()
  const mutateEditPost = useEditPostMutation()
  const mutateEditNotice = useEditNoticeMutation()
  const { commentDtoList, totalCount, totalPages } = isCommentLoading
    ? { commentDtoList: [], totalCount: 0, totalPages: 0 }
    : { ...commentData }
  const [currentContent, setCurrentContent] = useState(detailData?.content || '')
  const [commentInput, setCommentInput] = useState('')
  const navigate = useNavigate()
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const mutateCreateComment = useCreateCommentMutation()
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => setCommentInput(event.target.value)
  const [editorState, setEditorState] = useState(() => {
    const rawContentFromServer = JSON.parse(detailData.content)
    const contentState = convertFromRaw(rawContentFromServer)
    return EditorState.createWithContent(contentState)
  })
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const deletePost = (): void => {
    if (mode === 'examinfo') mutateDeletePost({ postId, callBack: () => navigate(-1) })
    else
      mutateDeleteNotice({
        noticeId: postId,
        callBack: () => navigate(-1),
      })
  }
  const loadNextPage = (): void => setCurrentPage((prev) => prev + 1)

  const callback = (entries, observer) => {
    const entry = entries[0]
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      observer.unobserve(target.current)
      setTimeout(() => {
        currentPage < totalPages && loadNextPage()
      }, 900)
    }
  }
  const target = useRef()
  useObserver({ callback, target })
  const onClickEditTypo = () => {
    if (isEditing) onClickEditCompleteButton()
    setIsEditing((prev) => !prev)
  }
  const onClickEditCompleteButton = () => {
    mode === 'examinfo' &&
      mutateEditPost({
        content: serializeContent(editorState),
        postId,
        tagList: detailData.postTagList,
        title: detailData.title,
        callBack: () => {
          setIsEditing(false)
          setCurrentContent(serializeContent(editorState))
        },
        mode,
      })
    mode === 'notice' &&
      mutateEditNotice({
        content: serializeContent(editorState),
        noticeId: +postId,
        title: detailData.title,
        callBack: () => {
          setIsEditing(false)
          setCurrentContent(serializeContent(editorState))
        },
        mode,
      })
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
    // 새 페이지의 댓글 데이터가 로드되면 기존 데이터에 추가합니다.
    if (commentData && commentData.commentDtoList)
      setAllComments((prevComments) => [...prevComments, ...commentData.commentDtoList])
  }, [commentData])

  useEffect(() => {
    if (!isDetailLoading) setCurrentContent(detailData.content)
  }, [isDetailLoading])

  return (
    <s.Root>
      <s.UpperTypoWrapper>
        <s.LeftTypoWrapper>
          <s.TagWrapper>
            {postTagList?.map((tag, index) => (
              <s.Tag key={index}>{tag}</s.Tag>
            ))}
          </s.TagWrapper>
          <s.TitleTypoWrapper>
            <s.TitleTypo>{title}</s.TitleTypo>
            <s.UpdatedDate>{createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.UpdatedDate>
          </s.TitleTypoWrapper>
        </s.LeftTypoWrapper>
        <s.RightTypoWrapper>
          <s.PostOwnerNickname>{nickname}</s.PostOwnerNickname>
          <s.EditTypo onClick={onClickEditTypo}>수정</s.EditTypo>
          <s.DistributionLine />
          <s.DeleteTypo onClick={onClickDeleteTypo}>삭제</s.DeleteTypo>
        </s.RightTypoWrapper>
      </s.UpperTypoWrapper>

      {isDetailLoading || (isCommentLoading && currentPage === 0) ? (
        <s.DetailSpinner>Loading...</s.DetailSpinner>
      ) : (
        <>
          <s.ContentWrapper>
            {isEditing ? (
              <s.EditorWrapper>
                <Editor
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
                />
                <s.EditCompleteButton onClick={onClickEditCompleteButton} icon="register">
                  수정완료
                </s.EditCompleteButton>
              </s.EditorWrapper>
            ) : (
              <s.Content dangerouslySetInnerHTML={{ __html: deserializeContent(currentContent) }} />
            )}

            <s.IconContainer>
              <HeartIcon fill={detailData?.isMyHearted ? `${HEART_COLOR}` : 'none'} onClick={onClickLikeButton} />
              <s.Count onClick={onClickLikeButton}>{detailData?.likeCount}</s.Count>
              <ScrapIcon fill={detailData?.isMyScraped ? `${SCRAP_COLOR}` : 'none'} onClick={onClickScrapButton} />
              <s.Count onClick={onClickScrapButton}>{detailData?.scrapCount}</s.Count>
            </s.IconContainer>
          </s.ContentWrapper>

          {commentDtoList.length !== 0 && (
            <s.CommentInputWrapper>
              <s.UserNickname>{userAuthInfo.name}</s.UserNickname>
              <s.CommentInput placeholder="댓글을 남겨보세요." onChange={onChange} value={commentInput} />
              <s.CommentRegisterButton onClick={onClickRegisterButton} icon="register">
                댓글등록
              </s.CommentRegisterButton>
            </s.CommentInputWrapper>
          )}
          <s.CommentWrapper>
            <s.CommentTitle>
              댓글 <s.CommentCount>{totalCount}</s.CommentCount>개
            </s.CommentTitle>
            <s.CommentContainer className={commentDtoList?.length !== 0 ? '' : 'no_content'}>
              {allComments?.length !== 0
                ? allComments?.map((comment, index) => (
                    <ExamInfoComment
                      key={comment.commentId}
                      commentId={comment.commentId}
                      isAuthor={comment.isAuthor}
                      likeCount={comment.likeCount}
                      memberName={comment.memberName}
                      updatedAt={comment.updatedAt}
                      content={comment.content}
                      isMyHearted={comment.isMyHearted}
                      postId={+postId}
                      ref={index === allComments.length - 1 ? target : null}
                      currentPage={currentPage}
                      //isMine 추가 예정
                    />
                  ))
                : !isCommentLoading && (
                    <>
                      <NoContentDescription
                        icon="pencil"
                        descriptions={['아직 댓글이 없어요', '첫 댓글을 남겨볼까요?']}
                      />
                      <s.CommentInputWrapper className="no_content">
                        <s.UserNickname>{userAuthInfo.name}</s.UserNickname>
                        <s.CommentInput placeholder="댓글을 남겨보세요." onChange={onChange} value={commentInput} />
                        <s.CommentRegisterButton onClick={onClickRegisterButton} icon="register">
                          댓글등록
                        </s.CommentRegisterButton>
                      </s.CommentInputWrapper>
                    </>
                  )}
            </s.CommentContainer>
          </s.CommentWrapper>
        </>
      )}
      {isDeletePostModalOpen && <DeletePostModal closeModal={closeDeletePostModal} deletePost={deletePost} />}
    </s.Root>
  )
}
