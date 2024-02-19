import { FC, useEffect, useState } from 'react'
import * as s from './styled'
import { HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'
import { EditorState, convertFromRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { deserializeContent, serializeContent } from 'utils'
import { useDetailData } from '../hooks/useDetailData'
import {
  useLikePostMutation,
  useScrapPostMutation,
  useEditPostMutation,
  useEditNoticeMutation,
  useDeleteNoticeMutation,
  useDeletePostMutation,
} from 'pages/ExamInfo/hooks/mutations'
import { DeletePostModal } from 'pages/ExamInfo/components'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'modules'
import { useSelector } from 'react-redux'

type PostContentContainerProps = {
  postId: number
  mode: 'examinfo' | 'notice'
}

export const PostContentContainer: FC<PostContentContainerProps> = ({ postId, mode }) => {
  const { detailData, isDetailLoading, content, isMyPost, createdAt, postTagList, title } = useDetailData({
    postId,
    mode,
  })
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const navigate = useNavigate()
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false)
  const [currentContent, setCurrentContent] = useState(content)
  const [isEditing, setIsEditing] = useState(false)
  const onClickEditTypo = () => {
    if (isEditing) onClickEditCompleteButton()
    setIsEditing((prev) => !prev)
  }
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const mutateLikePost = useLikePostMutation()
  const mutateScrapPost = useScrapPostMutation()
  const mutateEditPost = useEditPostMutation()
  const mutateEditNotice = useEditNoticeMutation()
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
  const mutateDeletePost = useDeletePostMutation()
  const mutateDeleteNotice = useDeleteNoticeMutation()

  const closeDeletePostModal = () => setIsDeletePostModalOpen(false)
  const onClickLikeButton = () => mutateLikePost({ postId, mode })
  const onClickScrapButton = () => mutateScrapPost({ postId, mode })
  const onClickDeleteTypo = () => setIsDeletePostModalOpen(true)
  const deletePost = (): void => {
    mode === 'examinfo' && mutateDeletePost({ postId, callBack: () => navigate(-1) })
    mode === 'notice' &&
      mutateDeleteNotice({
        noticeId: postId,
        callBack: () => navigate(-1),
      })
  }
  useEffect(() => {
    if (isDetailLoading) return
    setCurrentContent(detailData.content)

    const rawContentFromServer = JSON.parse(detailData.content)
    const contentState = convertFromRaw(rawContentFromServer)
    setEditorState(EditorState.createWithContent(contentState))
  }, [isDetailLoading])

  return (
    <>
      <s.UpperTypoWrapper>
        <s.LeftTypoWrapper>
          <s.TagWrapper>
            {postTagList?.map((tag, index) => (
              <s.Tag key={index}>{tag}</s.Tag>
            ))}
          </s.TagWrapper>
          <s.TitleTypoContainer>
            <s.TitleTypo>{title}</s.TitleTypo>
            <s.UpdatedDate>{createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.UpdatedDate>
          </s.TitleTypoContainer>
        </s.LeftTypoWrapper>
      </s.UpperTypoWrapper>
      {isDetailLoading ? (
        <s.DetailSpinner>Loading...</s.DetailSpinner>
      ) : (
        <>
          <s.ContentWrapper>
            <s.PostButtonContainer>
              <s.PostOwnerNickname>{userAuthInfo.nickname}</s.PostOwnerNickname>
              {isMyPost && (
                <>
                  <s.EditTypo onClick={onClickEditTypo}>수정</s.EditTypo>
                  <s.DistributionLine />
                  <s.DeleteTypo onClick={onClickDeleteTypo}>삭제</s.DeleteTypo>
                </>
              )}
            </s.PostButtonContainer>
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
        </>
      )}
      {isDeletePostModalOpen && <DeletePostModal closeModal={closeDeletePostModal} deletePost={deletePost} />}
    </>
  )
}
