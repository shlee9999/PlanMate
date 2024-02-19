import * as s from './styled'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { PostContentContainer } from './PostContentContainer/PostContentContainer'
import { CommentContainer } from './CommentContainer/CommentContainer'

type ExamInfoDetailPageProps = {
  mode: 'examinfo' | 'notice'
}

export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const params = useParams()
  const postId = +params.postId

  return (
    <s.ExamInfoDetail>
      <PostContentContainer postId={postId} mode={mode} />
      <CommentContainer postId={postId} mode={mode} />
    </s.ExamInfoDetail>
  )
}
