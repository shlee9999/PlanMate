import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import * as s from './styled'
import { createPost } from 'api/post/createPost'
import { useNavigate } from 'react-router-dom'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { serializeContent } from 'utils'
import { examinfoTagList, suggestTagList } from 'constants/tagList'
import { suggest } from 'api/suggest/suggest'
import { createNotice } from 'api/notice/admin/createNotice'

type BulletinPageProps = {
  mode: string
}
export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const tagList = (): string[] => {
    if (mode === 'examinfo') return examinfoTagList
    if (mode === 'suggest') return suggestTagList
    else return []
  }
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [isSelecting, setIsSelecting] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<string>('선택해주세요')
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }
  const [inputValue, setInputValue] = useState<string>('')
  const [suggestInput, setSuggestInput] = useState<string>('')
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const navigate = useNavigate()
  const onClickRegisterButton = async () => {
    if (inputValue === '' || (mode === 'examinfo' && selectedTag === '선택해주세요')) return
    if (mode === 'examinfo') {
      await createPost({
        content: serializeContent(editorState),
        tagList: [selectedTag],
        title: inputValue,
      }).then((res) => {
        navigate(-1)
      })
      return
    }
    if (mode === 'notice') {
      createNotice({
        content: serializeContent(editorState),
        title: inputValue,
      }).then((res) => {
        if (res) navigate(-1)
      })
      return
    }
    if (mode === 'suggest') {
      suggest({
        body: suggestInput,
        tag: selectedTag,
        title: inputValue,
      }).then((res) => {
        navigate('/timer', { state: true })
      })
    }
    //등록하시겠습니까? 확인
  }

  const onClickCancelButton = () => {
    navigate(-1)
  }
  const onClickTagSelector = (e: React.MouseEvent) => {
    setIsSelecting((prev) => !prev)
    e.stopPropagation()
  }
  const onClickTagOption = (id: number) => (e: React.MouseEvent) => {
    setSelectedTag(tagList()[id])
    e.stopPropagation()
    setIsSelecting(false)
  }
  const onClickRoot = () => {
    setIsSelecting(false)
  }
  const onSuggestInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSuggestInput(e.target.value)
  }
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <s.Root onClick={onClickRoot}>
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
          <s.TagSelectorWrapper>
            <s.TagTypo>태그</s.TagTypo>
            <s.TagSelector onClick={onClickTagSelector}>
              {selectedTag === '선택해주세요' ? selectedTag : '# ' + selectedTag}
              <s.TagListArrow fill="currentColor" />
              {isSelecting && (
                <s.TagOptionWrapper>
                  {tagList().map((tag, index) => (
                    <s.TagOption key={index} onClick={onClickTagOption(index)}>
                      {tag}
                    </s.TagOption>
                  ))}
                </s.TagOptionWrapper>
              )}
            </s.TagSelector>
          </s.TagSelectorWrapper>
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
