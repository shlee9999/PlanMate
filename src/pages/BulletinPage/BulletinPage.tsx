import * as s from './styled'
import React, { FC } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { examInfoTagList, suggestTagList } from 'constants/tagList'
import { TagSelector } from '../ExamInfo/components'
import { MAX_POST_TITLE_CHARACTER_COUNT, MAX_SUGGEST_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useBulletinPage } from './useBulletinPage'

type BulletinPageProps = {
  mode: 'examinfo' | 'suggest' | 'notice'
}
enum EForm {
  title = 'title',
  suggest = 'suggest',
}
const tagList = {
  examinfo: examInfoTagList,
  suggest: suggestTagList,
  notice: [],
}
export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const {
    setSelectedTag,
    onEditorStateChange,
    registerInput,
    registerTextarea,
    handleSubmit,
    onClickCancelButton,
    onSubmit,
    editorState,
    selectedTag,
  } = useBulletinPage({ mode })
  return (
    <s.BulletinPage>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
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
          <s.TitleInput
            placeholder="제목을 입력해주세요"
            {...registerInput(EForm.title, { maxLength: MAX_POST_TITLE_CHARACTER_COUNT })}
          />
          {mode !== 'notice' && (
            <TagSelector tagList={tagList[mode]} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          )}
        </s.UpperWrapper>
        {mode === 'suggest' ? (
          <s.SuggestInput
            placeholder="내용을 작성해주세요."
            {...registerTextarea(EForm.suggest, { maxLength: MAX_SUGGEST_CHARACTER_COUNT })}
          />
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
          <s.RegisterButton icon="register">등록</s.RegisterButton>
          <s.CancelButton onClick={onClickCancelButton} icon="close">
            취소
          </s.CancelButton>
        </s.ButtonWrapper>
      </s.Form>
    </s.BulletinPage>
  )
}
