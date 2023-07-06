import { ChangeEvent, FC, useState } from 'react'
import { CancelButton, ContentInput, RegisterButton, Root, TitleInput, WriteTypo } from './styled'
import { createPost } from 'api/post/createPost'
import { useNavigate } from 'react-router-dom'

type InputType = {
  title: string
  content: string
}
export const BulletinPage: FC = () => {
  const [inputValue, setInputValue] = useState<InputType>({ title: '', content: '' })
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value })
  }
  const navigate = useNavigate()
  const onClickRegisterButton = () => {
    createPost({
      content: inputValue.content,
      tagList: ['태그1', '태그2'],
      title: inputValue.title,
    }).then((res) => {
      console.log(res)
    })
    navigate(-1)
    //등록하시겠습니까? 확인
  }
  const onClickCancelButton = () => {
    navigate(-1)
  }
  return (
    <Root>
      <WriteTypo>글쓰기 ✏️</WriteTypo>
      <TitleInput name="title" value={inputValue.title} onChange={onChange} placeholder="제목을 입력해주세요" />
      <ContentInput name="content" value={inputValue.content} onChange={onChange} />
      <CancelButton onClick={onClickCancelButton}>취소</CancelButton>
      <RegisterButton onClick={onClickRegisterButton}>등록</RegisterButton>
    </Root>
  )
}
