import { ChangeEvent, FC, useState } from 'react'
import { CancelButton, ContentInput, RegisterButton, Root, TitleInput } from './styled'
import { createPost } from 'api/post/createPost'

type BulletinTabProps = {
  cancelBulletin: () => void
}

type InputType = {
  title: string
  content: string
}
export const BulletinTab: FC<BulletinTabProps> = ({ cancelBulletin }) => {
  const [inputValue, setInputValue] = useState<InputType>({ title: '', content: '' })
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value })
  }
  const onClickRegisterButton = () => {
    createPost({
      content: inputValue.content,
      tagList: ['태그1', '태그2'],
      title: inputValue.title,
    }).then((res) => {
      console.log(res)
    })
  }
  return (
    <Root>
      <TitleInput name="title" value={inputValue.title} onChange={onChange} />
      <ContentInput name="content" value={inputValue.content} onChange={onChange} />
      <CancelButton onClick={cancelBulletin}>취소</CancelButton>
      <RegisterButton onClick={onClickRegisterButton}>등록</RegisterButton>
    </Root>
  )
}
