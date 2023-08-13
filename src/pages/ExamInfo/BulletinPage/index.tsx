import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  ButtonWrapper,
  CancelButton,
  CancelImg,
  DownArrowImg,
  Root,
  TagOption,
  TagOptionWrapper,
  TagSelector,
  TagSelectorWrapper,
  TagTypo,
  TitleInput,
  UpperWrapper,
  WriteTypo,
} from './styled'
import { createPost } from 'api/post/createPost'
import { useNavigate } from 'react-router-dom'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { serializeContent } from 'utils/wysiwyg'
import { CheckImg, RegisterButton } from 'styled'

import downArrowImg from 'assets/images/right_arrow.png'
import { tagList } from 'constants/tagList'

type BulletinPageProps = {
  mode: string
}
export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [isSelecting, setIsSelecting] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<string>('선택해주세요')
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }
  const [inputValue, setInputValue] = useState<string>('')
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const navigate = useNavigate()
  const onClickRegisterButton = async () => {
    if (inputValue === '' || (mode === 'examinfo' && selectedTag === '선택해주세요')) return
    if (mode === 'examinfo')
      await createPost({
        content: serializeContent(editorState),
        tagList: [selectedTag],
        title: inputValue,
      }).then((res) => {
        if (res) navigate(-1)
      })
    if (mode === 'notice') {
      console.log('노티스')
      return
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
    setSelectedTag(tagList[id])
    e.stopPropagation()
    setIsSelecting(false)
  }
  const onClickRoot = () => {
    setIsSelecting(false)
  }
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <Root onClick={onClickRoot}>
      <WriteTypo>글쓰기 ✏️</WriteTypo>
      <UpperWrapper>
        <TitleInput name="title" value={inputValue} onChange={onChange} placeholder="제목을 입력해주세요" />
        {mode === 'examinfo' && (
          <TagSelectorWrapper>
            <TagTypo>태그</TagTypo>
            <TagSelector onClick={onClickTagSelector}>
              {selectedTag === '선택해주세요' ? selectedTag : '# ' + selectedTag}
              <DownArrowImg alt="down_arrow_img" src={downArrowImg} />
              {isSelecting && (
                <TagOptionWrapper>
                  {tagList.map((tag, index) => (
                    <TagOption key={index} onClick={onClickTagOption(index)}>
                      {tag}
                    </TagOption>
                  ))}
                </TagOptionWrapper>
              )}
            </TagSelector>
          </TagSelectorWrapper>
        )}
      </UpperWrapper>
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
      <ButtonWrapper>
        <CancelButton onClick={onClickCancelButton}>
          <CancelImg />
          취소
        </CancelButton>
        <RegisterButton onClick={onClickRegisterButton}>
          <CheckImg />
          등록
        </RegisterButton>
      </ButtonWrapper>
    </Root>
  )
}
