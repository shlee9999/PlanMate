import { EditorState, convertFromRaw } from 'draft-js'
import { RootState } from 'modules'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { serializeContent } from 'utils'
import {
  useLikePostMutation,
  useScrapPostMutation,
  useDeletePostMutation,
  useDeleteNoticeMutation,
  useEditPostMutation,
  useEditNoticeMutation,
} from '../hooks/mutations'
import { useDetailData } from './hooks/useDetailData'

type useExamInfoDetailProps = {
  mode: 'examinfo' | 'notice'
}

export const useExamInfoDetail = ({ mode }: useExamInfoDetailProps) => {
  const params = useParams()
  const postId = +params.postId
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const { isDetailLoading, postTagList, nickname, title, createdAt, content, isMyPost, detailData } = useDetailData({
    postId,
    mode,
  })
  const [currentContent, setCurrentContent] = useState(content)
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const mutateLikePost = useLikePostMutation()
  const mutateScrapPost = useScrapPostMutation()
  const mutateDeletePost = useDeletePostMutation()
  const mutateDeleteNotice = useDeleteNoticeMutation()
  const mutateEditPost = useEditPostMutation()
  const mutateEditNotice = useEditNoticeMutation()

  const navigate = useNavigate()
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

  const closeDeletePostModal = () => setIsDeletePostModalOpen(false)
  const onClickLikeButton = () => mutateLikePost({ postId, mode })
  const onClickScrapButton = () => mutateScrapPost({ postId, mode })
  const onClickDeleteTypo = () => setIsDeletePostModalOpen(true)

  useEffect(() => {
    if (isDetailLoading) return
    setCurrentContent(detailData.content)

    const rawContentFromServer = JSON.parse(detailData.content)
    const contentState = convertFromRaw(rawContentFromServer)
    setEditorState(EditorState.createWithContent(contentState))
  }, [isDetailLoading])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return {
    postTagList,
    nickname,
    title,
    createdAt,
    currentContent,
    isDeletePostModalOpen,
    onEditorStateChange,
    deletePost,
    onClickEditTypo,
    closeDeletePostModal,
    onClickLikeButton,
    onClickScrapButton,
    onClickDeleteTypo,
    isMyPost,
    isDetailLoading,
    isEditing,
    editorState,
    onClickEditCompleteButton,
    detailData,
    postId,
    userAuthInfo,
  }
}
