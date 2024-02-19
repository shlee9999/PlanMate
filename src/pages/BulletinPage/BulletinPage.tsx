import * as s from './styled'
import React, { FC } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { examInfoTagList } from 'constants/tagList'
import { TagSelector } from '../ExamInfo/components'
import { MAX_POST_TITLE_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useBulletinPage } from './useBulletinPage'

type BulletinPageProps = {
  mode: 'examinfo' | 'notice'
}
enum EForm {
  title = 'title',
}
const tagList = {
  examinfo: examInfoTagList,
  notice: [],
}

export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const {
    setSelectedTag,
    onEditorStateChange,
    registerInput,
    handleSubmit,
    onClickCancelButton,
    onSubmit,
    editorState,
    selectedTag,
  } = useBulletinPage({ mode })
  return (
    <s.BulletinPage>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <s.WriteTypo>글쓰기 ✏️</s.WriteTypo>
        <s.UpperWrapper>
          <s.TitleInput
            placeholder="제목을 입력해주세요"
            {...registerInput(EForm.title, { maxLength: MAX_POST_TITLE_CHARACTER_COUNT })}
          />
          {mode !== 'notice' && (
            <TagSelector tagList={tagList[mode]} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          )}
        </s.UpperWrapper>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'history'],
            fontSize: {
              options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
          }}
          placeholder="내용을 작성해주세요"
          localization={{
            locale: 'ko',
          }}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        <s.ButtonWrapper>
          <s.RegisterButton icon="register">등록</s.RegisterButton>
          <s.CancelButton onClick={onClickCancelButton} icon="close">
            취소
          </s.CancelButton>
        </s.ButtonWrapper>
      </s.Form>
    </s.BulletinPage>
  )
}
