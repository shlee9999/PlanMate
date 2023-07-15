import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  ButtonWrapper,
  CancelButton,
  CancelImg,
  DownArrowImg,
  Root,
  TagSelector,
  TagSelectorWrapper,
  TagTypo,
  TitleInput,
  UpperWrapper,
  WriteTypo,
} from './styled'
import { createPost } from 'api/post/createPost'
import { useNavigate } from 'react-router-dom'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { serializeContent } from 'utils/wysiwyg'
import { CheckImg, RegisterButton } from 'styled'

import downArrowImg from 'assets/images/left_arrow.png'
export const BulletinPage: FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }
  const [inputValue, setInputValue] = useState<string>('')
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const navigate = useNavigate()
  const onClickRegisterButton = async () => {
    if (inputValue === '') return
    await createPost({
      content: serializeContent(editorState),
      tagList: ['태그1', '태그2'],
      title: inputValue,
    }).then((res) => {
      navigate(-1)
    })

    //등록하시겠습니까? 확인
  }
  const onClickCancelButton = () => {
    navigate(-1)
  }
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  useEffect(() => {
    console.log(convertToRaw(editorState.getCurrentContent()))
  }, [editorState])
  return (
    <Root>
      <WriteTypo>글쓰기 ✏️</WriteTypo>
      <UpperWrapper>
        <TitleInput name="title" value={inputValue} onChange={onChange} placeholder="제목을 입력해주세요" />
        <TagSelectorWrapper>
          <TagTypo>태그</TagTypo>
          <TagSelector>
            선택해주세요
            <DownArrowImg alt="down_arrow_img" src={downArrowImg} />
          </TagSelector>
        </TagSelectorWrapper>
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
