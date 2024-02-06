import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import { EditorState, convertFromRaw } from 'draft-js'
import { useForm } from 'hooks'
import { RootState } from 'modules'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'
import { serializeContent } from 'utils'
import {
  useLikePostMutation,
  useScrapPostMutation,
  useDeletePostMutation,
  useDeleteNoticeMutation,
  useEditPostMutation,
  useEditNoticeMutation,
  useCreateCommentMutation,
} from '../hooks/mutations'

type useExamInfoDetailProps = {
  mode: 'examinfo' | 'notice'
}

type CommentForm = {
  comment: string
}
export const useExamInfoDetail = ({ mode }: useExamInfoDetailProps) => {
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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: commentData, isLoading: isCommentLoading } = useQuery<FindAllCommentsResponseProps>(
    [QueryKeys.commentData, postId, currentPage + ''],
    () => findAllComments({ pages: currentPage - 1, postId }),
    { keepPreviousData: true }
  )
  const [currentContent, setCurrentContent] = useState(content)
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const {
    registerTextarea: registerCommentInput,
    handleSubmit: handleCommentSubmit,
    setValue: setCommentInputValue,
  } = useForm<CommentForm>()
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const { commentDtoList = [], totalCount = 0, totalPages = 0 } = commentData || {}
  const mutateLikePost = useLikePostMutation()
  const mutateScrapPost = useScrapPostMutation()
  const mutateDeletePost = useDeletePostMutation()
  const mutateDeleteNotice = useDeleteNoticeMutation()
  const mutateEditPost = useEditPostMutation()
  const mutateEditNotice = useEditNoticeMutation()
  const mutateCreateComment = useCreateCommentMutation()

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
  const onCommentSubmit = ({ comment }: CommentForm): void => {
    mutateCreateComment({
      currentPage,
      content: comment,
      postId,
      callBack: () => setCommentInputValue('comment', ''),
      isPostAuthor: isMyPost,
      // id 비교로 변경해야함
      memberName: userAuthInfo.nickname,
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
    setCurrentPage,
    currentContent,
    isDeletePostModalOpen,
    registerCommentInput,
    handleCommentSubmit,
    onEditorStateChange,
    commentDtoList,
    totalCount,
    totalPages,
    deletePost,
    onClickEditTypo,
    onCommentSubmit,
    closeDeletePostModal,
    onClickLikeButton,
    onClickScrapButton,
    onClickDeleteTypo,
    isMyPost,
    isDetailLoading,
    isCommentLoading,
    currentPage,
    isEditing,
    editorState,
    onClickEditCompleteButton,
    detailData,
    postId,
    commentData,
    userAuthInfo,
  }
}
