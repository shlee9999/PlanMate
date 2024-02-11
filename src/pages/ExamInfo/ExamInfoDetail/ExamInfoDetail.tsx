import * as s from './styled'
import { FC, useEffect } from 'react'
import { useDetailData } from './hooks/useDetailData'
import { useParams } from 'react-router-dom'
import { PostContentContainer } from './PostContentContainer/PostContentContainer'
import { CommentContainer } from './CommentContainer/CommentContainer'

type ExamInfoDetailPageProps = {
  mode: 'examinfo' | 'notice'
}

export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const params = useParams()
  const postId = +params.postId

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <s.ExamInfoDetail>
      <PostContentContainer postId={postId} mode={mode} />
      <CommentContainer postId={postId} mode={mode} />
    </s.ExamInfoDetail>
  )
}
