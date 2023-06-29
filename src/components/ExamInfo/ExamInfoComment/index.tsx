import { FC } from 'react'
import { Root } from './styled'

type ExamInfoCommentProps = {
  title: string
  like: number
  scrap: number
  commentList: string
  nickname: string
  updated_at: string
  tagList: Array<string>
  content: string
}

export const ExamInfoComment: FC<ExamInfoCommentProps> = ({
  title,
  like,
  scrap,
  commentList,
  nickname,
  updated_at,
  tagList,
  content,
}) => {
  return <Root>ExamInfoComment</Root>
}
