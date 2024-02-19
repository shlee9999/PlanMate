import { EditorState } from 'draft-js'
import { useForm } from 'hooks'
import {
  useCreatePostMutation,
  useCreateNoticeMutation,
  useCreateSuggestMutation,
} from 'pages/ExamInfo/hooks/mutations'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { serializeContent } from 'utils'

type UseBulletinPageProps = {
  mode: 'examinfo' | 'suggest' | 'notice'
}
enum EForm {
  title = 'title',
  suggest = 'suggest',
}
type IForm = {
  [key in EForm]: string
}

export const useBulletinPage = ({ mode }: UseBulletinPageProps) => {
  const location = useLocation()
  const initialTag = location?.state?.initialTag || '선택해주세요'
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [selectedTag, setSelectedTag] = useState(initialTag)
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const { registerInput, registerTextarea, handleSubmit, inputFocus, textareaFocus } = useForm<IForm>()
  const navigate = useNavigate()
  const mutateCreatePost = useCreatePostMutation()
  const mutateCreateNotice = useCreateNoticeMutation()
  const mutateCreateSuggest = useCreateSuggestMutation()

  const onClickCancelButton = () => navigate(-1)

  const onSubmit = (data: IForm) => {
    if (mode === 'examinfo' && selectedTag === '선택해주세요') return
    if (mode === 'examinfo')
      mutateCreatePost({
        content: serializeContent(editorState),
        tagList: [selectedTag],
        title: data.title,
        callBack: () => navigate(-1),
      })
    if (mode === 'notice')
      mutateCreateNotice({
        content: serializeContent(editorState),
        title: data.title,
        callBack: () => navigate(-1),
      })
    if (mode === 'suggest')
      mutateCreateSuggest({
        body: data.suggest,
        tag: selectedTag,
        title: data.title,
        callBack: () => navigate('/timer', { state: true }),
      })
    // 등록하시겠습니까? 확인
  }

  useEffect(() => {
    inputFocus(EForm.title)
  }, [])

  useEffect(() => {
    textareaFocus(EForm.suggest)
  }, [selectedTag])

  return {
    setSelectedTag,
    onEditorStateChange,
    registerInput,
    registerTextarea,
    handleSubmit,
    onClickCancelButton,
    onSubmit,
    editorState,
    selectedTag,
  }
}
