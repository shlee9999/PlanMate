import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { serializeContent } from 'utils'
import { examInfoTagList, suggestTagList } from 'constants/tagList'
import { useCreatePostMutation, useCreateNoticeMutation, useCreateSuggestMutation } from '../hooks/mutations'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import * as s from './styled'
import { TagSelector } from '../components'

const tagList = {
  examinfo: examInfoTagList,
  suggest: suggestTagList,
  notice: [],
}
type BulletinPageProps = {
  mode: 'examinfo' | 'suggest' | 'notice'
}
export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const location = useLocation()
  const initialTag = location.state.initialTag || '선택해주세요'

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [selectedTag, setSelectedTag] = useState(initialTag)
  const onEditorStateChange = (editorState: EditorState) => setEditorState(editorState)
  const [inputValue, setInputValue] = useState<string>('')
  const [suggestInput, setSuggestInput] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value)
  const navigate = useNavigate()
  const mutateCreatePost = useCreatePostMutation()
  const mutateCreateNotice = useCreateNoticeMutation()
  const mutateCreateSuggest = useCreateSuggestMutation()
  const onClickRegisterButton = async () => {
    if (inputValue === '' || (mode === 'examinfo' && selectedTag === '선택해주세요')) return
    if (mode === 'examinfo')
      mutateCreatePost({
        content: serializeContent(editorState),
        tagList: [selectedTag],
        title: inputValue,
        callBack: () => navigate(-1),
      })

    if (mode === 'notice')
      mutateCreateNotice({
        content: serializeContent(editorState),
        title: inputValue,
        callBack: () => navigate(-1),
      })
    if (mode === 'suggest')
      mutateCreateSuggest({
        body: suggestInput,
        tag: selectedTag,
        title: inputValue,
        callBack: () => navigate('/timer', { state: true }),
      })
    //등록하시겠습니까? 확인
  }

  const onClickCancelButton = () => navigate(-1)

  const onSuggestInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSuggestInput(e.target.value)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <s.Root>
      <s.WriteTypo>
        {mode === 'suggest' ? (
          <>
            건의사항 🚀
            <s.SuggestTypo>
              <s.GreenTypo>플랜메이트</s.GreenTypo>에게 하시고 싶으신 말씀이 있으시다면 언제든지 의견을 보내주세요!
            </s.SuggestTypo>
          </>
        ) : (
          '글쓰기 ✏️'
        )}
      </s.WriteTypo>

      <s.UpperWrapper>
        <s.TitleInput name="title" value={inputValue} onChange={onChange} placeholder="제목을 입력해주세요" />
        {mode !== 'notice' && (
          <TagSelector tagList={tagList[mode]} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        )}
      </s.UpperWrapper>
      {mode === 'suggest' ? (
        <s.SuggestInput placeholder="내용을 작성해주세요." onChange={onSuggestInputChange} value={suggestInput} />
      ) : (
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
      )}
      <s.ButtonWrapper>
        <s.CancelButton onClick={onClickCancelButton} icon="close">
          취소
        </s.CancelButton>
        <s.RegisterButton onClick={onClickRegisterButton} icon="register">
          등록
        </s.RegisterButton>
      </s.ButtonWrapper>
    </s.Root>
  )
}
