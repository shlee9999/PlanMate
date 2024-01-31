import { FindAllChildResponseProps, findAllChild } from 'api/comment/findAllChild'
import { useEditComment, useCreateReplyMutation, useLikeCommentMutation } from 'pages/ExamInfo/hooks/mutations'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'

type ReplyForm = {
  reply: string
}
type CommentForm = {
  comment: string
}
type useCommentProps = {
  postId: number
  commentId: number
  memberName: string
  isPostAuthor: boolean
  currentPage: number
  setCommentFocus: (key: 'comment') => void
  setCommentValue: (key: 'comment', value: string) => void
  setReplyValue: (key: 'reply', value: string) => void
  isAuthor: boolean
  closeEllipsisModal: () => void
  content: string
}

export const useComment = ({
  postId,
  commentId,
  memberName,
  isPostAuthor,
  currentPage,
  setCommentFocus,
  setCommentValue,
  setReplyValue,
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
  const mutateCreateReply = useCreateReplyMutation()
  const mutateLikeComment = useLikeCommentMutation()

  const onReplySubmit = ({ reply }: ReplyForm) => {
    if (!postId) return
    mutateCreateReply({
      content: reply,
      parentCommentId: commentId,
      postId,
      callBack: () => setReplyValue('reply', ''),
      memberName,
      isPostAuthor,
    })
  }
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
  const toggleReplying = (e: React.MouseEvent) => setIsReplying((prev) => !prev)

  useEffect(() => {
    setCommentFocus('comment')
  }, [isEditing])
  useEffect(() => {
    setCommentValue('comment', content)
  }, [])
  return {
    replyList,
    onReplySubmit,
    isEditing,
    isReplying,
    onClickLikeButton,
    onCommentSubmit,
    onClickComment,
    onClickEllipsisEditButton,
    toggleReplying,
  }
}
