import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deserializeContent, serializeContent } from 'utils'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
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
import { NoContentDescription, Pagination } from 'components'
import { DeletePostModal, ExamInfoComment } from '../components'
import * as s from './styled'

type ExamInfoDetailPageProps = {
  mode: 'examinfo' | 'notice'
}

export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const params = useParams()
  const postId = +params.postId
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const { data: detailData, isLoading: isDetailLoading } = useQuery<CheckPostResponseProps>(
    ['detailData', mode, postId],
    () => checkPost({ postId })
  )
  const {
    postTagList = [],
    nickname = '',
    title = '',
    createdAt = '',
    content = '',
    isMyPost = false,
  } = detailData || {}
  if (!postId) return <s.Root>Error!</s.Root>
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: commentData, isLoading: isCommentLoading } = useQuery<FindAllCommentsResponseProps>(
    ['commentData', postId, currentPage + ''],
    () => findAllComments({ pages: currentPage - 1, postId }),
    { keepPreviousData: true }
  )

  const mutateLikePost = useLikePostMutation()
  const mutateScrapPost = useScrapPostMutation()
  const mutateDeletePost = useDeletePostMutation()
  const mutateDeleteNotice = useDeleteNoticeMutation()
  const mutateEditPost = useEditPostMutation()
  const mutateEditNotice = useEditNoticeMutation()
  const { commentDtoList = [], totalCount = 0, totalPages = 0 } = commentData || {}
  const [currentContent, setCurrentContent] = useState(content)
  const [commentInput, setCommentInput] = useState('')
  const navigate = useNavigate()
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const mutateCreateComment = useCreateCommentMutation()
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => setCommentInput(event.target.value)
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const deletePost = (): void => {
    mode === 'examinfo' && mutateDeletePost({ postId, callBack: () => navigate(-1) })
    mode === 'notice' &&
      mutateDeleteNotice({
        noticeId: postId,
        callBack: () => navigate(-1),
      })
  }

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
      isPostAuthor: isMyPost,
      // id 비교로 변경해야함
      memberName: userAuthInfo.name,
    })
  }
  const closeDeletePostModal = () => setIsDeletePostModalOpen(false)
  const onClickLikeButton = () => mutateLikePost({ postId, mode })
  const onClickScrapButton = () => mutateScrapPost({ postId, mode })
  const onClickDeleteTypo = () => setIsDeletePostModalOpen(true)

  useEffect(() => {
    if (!isDetailLoading) setCurrentContent(detailData.content)
  }, [isDetailLoading])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

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
          {isMyPost && (
            <>
              <s.EditTypo onClick={onClickEditTypo}>수정</s.EditTypo>
              <s.DistributionLine />
              <s.DeleteTypo onClick={onClickDeleteTypo}>삭제</s.DeleteTypo>
            </>
          )}
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
              {commentData?.commentDtoList?.length !== 0
                ? commentData?.commentDtoList?.map((comment) => (
                    <ExamInfoComment
                      key={comment.commentId}
                      commentId={comment.commentId}
                      isPostAuthor={comment.isPostAuthor}
                      likeCount={comment.likeCount}
                      memberName={comment.memberName}
                      updatedAt={comment.updatedAt}
                      content={comment.content}
                      isMyHearted={comment.isMyHearted}
                      postId={+postId}
                      currentPage={currentPage}
                      isAuthor={comment.isAuthor}
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
      {!isCommentLoading && !isDetailLoading && (
        <Pagination currentPage={currentPage} totalPages={commentData.totalPages} setCurrentPage={setCurrentPage} />
      )}
    </s.Root>
  )
}
