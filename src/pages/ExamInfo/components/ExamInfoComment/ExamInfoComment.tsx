import React, { ChangeEvent, ForwardRefRenderFunction, forwardRef, useEffect, useRef, useState } from 'react'
import { ResponseCommentType } from 'api/types'
import { FindAllChildResponseProps, findAllChild } from 'api/comment/findAllChild'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'
import {
  useLikeCommentMutation,
  useEditComment,
  useDeleteCommentMutation,
  useCreateReplyMutation,
} from 'pages/ExamInfo/hooks/mutations'
import { ExamInfoReply, DeleteCommentModal } from 'pages/ExamInfo/components'
import { useQuery } from 'react-query'
import * as s from './styled'

type ExamInfoCommentProps = {
  deleteComment?: () => void
  currentPage: number
  reply?: boolean
  isMine?: boolean
  postId: number
} & ResponseCommentType

//  key : ['commentData', postId, currentPage + '']
const ExamInfoCommentComponent: ForwardRefRenderFunction<HTMLDivElement, ExamInfoCommentProps> = (
  { commentId, isAuthor, isMyHearted, likeCount, memberName, updatedAt, content, isMine = true, postId, currentPage },
  ref
) => {
  //대댓글 로직
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)
  const closeEllipsisModal = (): void => isEllipsisOpen && setIsEllipsisOpen(false)
  const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isReplying, setIsReplying] = useState(false)
  const [replyInput, setReplyInput] = useState('')
  const [inputValue, setInputValue] = useState(content)
  const { data: replyList, isLoading } = useQuery<FindAllChildResponseProps>(
    ['replyList', commentId],
    () => findAllChild({ parentCommentId: commentId, postId }),
    { initialData: [] }
  )
  const navigate = useNavigate()
  const mutateLikeComment = useLikeCommentMutation()
  const mutateEditComment = useEditComment()
  const mutateDeleteComment = useDeleteCommentMutation()
  const mutateCreateReply = useCreateReplyMutation()
  const deleteReply = (commentId: number) => () => {
    mutateDeleteComment({
      commentId,
      postId,
      currentPage,
    })
  }
  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }
  const inputRef = useRef(null)
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()
  const onClickEllipsisDeleteButton = (): void => setIsDeleteCommentModalOpen(true)

  const onClickLikeButton = (): void => {
    mutateLikeComment({
      commentId,
      postId,
      currentPage,
    })
  }

  const closeDeleteCommentModal = () => setIsDeleteCommentModalOpen(false)
  const onClickReplyButton = () => setIsReplying((prev) => !prev)
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)
  const onReplyInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => setReplyInput(e.target.value)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      if (e.shiftKey) return
      e.preventDefault()
      mutateEditComment({
        commentId,
        content: inputValue,
        postId,
        currentPage,
        callBack: () => setIsEditing(false),
      })
    }
  }
  const onClickEllipsisEditButton = () => {
    setIsEditing(true)
    closeEllipsisModal()
  }
  const onClickReplyRegisterButton = () => {
    if (!postId) return
    mutateCreateReply({
      content: replyInput,
      parentCommentId: commentId,
      postId: postId,
      callBack: () => setReplyInput(''),
    })
  }
  const onClickComment = () => isMine && navigate(`/examinfo/detail/${postId}`)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  useEffect(() => {
    findAllChild({
      parentCommentId: commentId,
      postId: postId,
    })
  }, [])

  return (
    <>
      <s.Root onClick={closeEllipsisModal} ref={ref}>
        {isMine && <s.EllipsisButton onClick={toggleEllipsisModal}></s.EllipsisButton>}
        {isEllipsisOpen && (
          <s.EllipsisModal onClick={onClickModal}>
            <s.EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</s.EllipsisEditButton>
            <s.EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</s.EllipsisDeleteButton>
          </s.EllipsisModal>
        )}
        <s.LeftContainer>
          <s.UpperTypoWrapper>
            <s.CommentOwnerNickname>{memberName}</s.CommentOwnerNickname>
            {isAuthor && <s.AuthorIcon>글쓴이</s.AuthorIcon>}
            <s.Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.Date>
          </s.UpperTypoWrapper>
          {isEditing ? (
            <s.EditInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} ref={inputRef} />
          ) : (
            <s.Comment onClick={onClickComment} className={isMine ? 'mypage_comment' : ''}>
              {content}
            </s.Comment>
          )}
          {isMine && (
            <s.ReplyButton onClick={onClickReplyButton}>
              답글 <s.ReplyCount>{replyList.length}</s.ReplyCount>
            </s.ReplyButton>
          )}
        </s.LeftContainer>
        <s.LikeButton onClick={onClickLikeButton}>
          <HeartIcon fill={isMyHearted ? `${HEART_COLOR}` : 'none'} />
          {likeCount}
        </s.LikeButton>
        <DeleteCommentModal
          closeModal={closeDeleteCommentModal}
          isOpen={isDeleteCommentModalOpen}
          id={commentId}
          postId={postId}
          currentPage={currentPage}
        />
      </s.Root>
      {isReplying && (
        <>
          {replyList?.map((reply) => (
            <ExamInfoReply deleteComment={deleteReply(reply.commentId)} key={reply.commentId} {...reply} />
          ))}
          <s.ReplyInputWrapper>
            <s.ReplyMark />
            <s.ReplyRightWrapper>
              <s.UserNickname>{userAuthInfo.name}</s.UserNickname>
              <s.ReplyInput placeholder="대댓글을 남겨보세요." onChange={onReplyInputChange} value={replyInput} />
              <s.ReplyRegisterButton onClick={onClickReplyRegisterButton} icon="register">
                댓글등록
              </s.ReplyRegisterButton>
            </s.ReplyRightWrapper>
          </s.ReplyInputWrapper>
        </>
      )}
    </>
  )
}
export const ExamInfoComment = forwardRef(ExamInfoCommentComponent)
