import { FindAllChildResponseProps, findAllChild } from 'api/comment/findAllChild'
import { useEditComment, useLikeCommentMutation } from 'pages/ExamInfo/hooks/mutations'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'

type CommentForm = {
  comment: string
}
type useCommentProps = {
  postId: number
  commentId: number
  currentPage: number
  setCommentFocus: (key: 'comment') => void
  setCommentValue: (key: 'comment', value: string) => void
  isAuthor: boolean
  closeEllipsisModal: () => void
  content: string
}

export const useComment = ({
  postId,
  commentId,

  currentPage,
  setCommentFocus,
  setCommentValue,

  closeEllipsisModal,
  content,
  isAuthor,
}: useCommentProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isReplying, setIsReplying] = useState(false)
  const navigate = useNavigate()
  const { data: replyList } = useQuery<FindAllChildResponseProps>(
    [QueryKeys.replyList, commentId],
    () => findAllChild({ parentCommentId: commentId, postId }),
    { initialData: [] }
  )
  const mutateEditComment = useEditComment()
  const mutateLikeComment = useLikeCommentMutation()

  const onClickLikeButton = (): void => {
    mutateLikeComment({
      commentId,
      postId,
      currentPage,
    })
  }
  const onCommentSubmit = ({ comment }: CommentForm) => {
    mutateEditComment({
      commentId,
      content: comment,
      postId,
      currentPage,
      callBack: () => setIsEditing(false),
    })
  }
  const onClickComment = () => isAuthor && navigate(`/examinfo/detail/${postId}`)
  const onClickEllipsisEditButton = () => {
    setIsEditing(true)
    closeEllipsisModal()
  }
  const toggleReplying = () => setIsReplying((prev) => !prev)

  useEffect(() => {
    setCommentFocus('comment')
  }, [isEditing])
  useEffect(() => {
    setCommentValue('comment', content)
  }, [])
  return {
    replyList,
    isEditing,
    isReplying,
    onClickLikeButton,
    onCommentSubmit,
    onClickComment,
    onClickEllipsisEditButton,
    toggleReplying,
  }
}
