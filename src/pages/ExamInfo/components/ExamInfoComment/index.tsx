import React, { ChangeEvent, ForwardRefRenderFunction, forwardRef, useEffect, useRef, useState } from 'react'
import {
  AuthorIcon,
  Comment,
  CommentOwnerNickname,
  Date,
  EditInput,
  EllipsisButton,
  EllipsisDeleteButton,
  EllipsisEditButton,
  EllipsisModal,
  LeftContainer,
  LikeButton,
  LikeImg,
  ReplyButton,
  ReplyCount,
  ReplyInput,
  ReplyInputWrapper,
  ReplyMark,
  ReplyRegisterButton,
  ReplyRightWrapper,
  Root,
  UpperTypoWrapper,
  UserNickname,
} from './styled'
import { ResponseCommentType } from 'api/common/commonType'
import { likeComment } from 'api/comment/likeComment'
import { DeleteCommentModal } from '../DeleteModal/DeleteCommentModal'
import { modifyComment } from 'api/comment/modifyComment'
import { CreateChildCommentResponseProps, createChildComment } from 'api/comment/createChildComment'

import { FindAllChildResponseProps, findAllChild } from 'api/comment/findAllChild'
import { removeComment } from 'api/comment/removeComment'
import { useNavigate } from 'react-router-dom'
import { ExamInfoReply } from '../Reply'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { HeartIcon } from 'assets/SvgComponents'
import { HEART_COLOR } from 'constants/color'

type ExamInfoCommentProps = {
  deleteComment?: () => void
} & ResponseCommentType

const ExamInfoCommentComponent: ForwardRefRenderFunction<HTMLDivElement, ExamInfoCommentProps> = (
  {
    commentId,
    isAuthor,
    isMyHearted,
    likeCount: initialLikeCount,
    memberName,
    updatedAt,
    content,
    deleteComment,
    postId,
  },
  ref
) => {
  //대댓글 로직
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(isMyHearted)
  const closeEllipsisModal = (): void => isEllipsisOpen && setIsEllipsisOpen(false)
  const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState<boolean>(false)
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(initialLikeCount)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isReplying, setIsReplying] = useState<boolean>(false)
  const [replyInput, setReplyInput] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>(content)
  const [currentContent, setCurrentContent] = useState<string>(content)
  const [currentReplyList, setCurrentReplyList] = useState<ResponseCommentType[]>([])
  const navigate = useNavigate()
  const deleteReply = (commentId: number) => () => {
    removeComment({
      commentId: commentId,
    }).then((res) => {
      console.log(res)
      if (res) setCurrentReplyList((prev) => prev.filter((reply) => reply.commentId !== commentId))
    })
  }
  const toggleEllipsisModal = (e: React.MouseEvent): void => {
    setIsEllipsisOpen((prev) => !prev)
    e.stopPropagation()
  }
  const inputRef = useRef(null)
  const onClickModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const onClickEllipsisDeleteButton = (): void => {
    setIsDeleteCommentModalOpen(true)
  }
  const onClickLikeButton = (): void => {
    likeComment({ commentId: commentId }) //like api
    if (isLiked) {
      setIsLiked(false)
      setCurrentLikeCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setCurrentLikeCount((prev) => prev + 1)
    }
  }

  const closeDeleteCommentModal = () => setIsDeleteCommentModalOpen(false)
  const onClickReplyButton = () => setIsReplying((prev) => !prev)
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)
  const onReplyInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => setReplyInput(e.target.value)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      if (e.shiftKey) return
      e.preventDefault()
      modifyComment({
        commentId: commentId,
        content: inputValue,
      }).then((res) => {
        if (res) {
          setCurrentContent(inputValue)
          setIsEditing(false)
        }
      })
    }
  }
  const onClickEllipsisEditButton = () => {
    setIsEditing(true)
    closeEllipsisModal()
  }
  const onClickReplyRegisterButton = () => {
    if (!postId) return
    createChildComment({
      content: replyInput,
      parentCommentId: commentId,
      postId: postId,
    }).then((res1) => {
      if (!res1) return
      findAllChild({
        parentCommentId: commentId,
        postId: postId,
      }).then((res2: unknown) => {
        const response = res2 as FindAllChildResponseProps
        setCurrentReplyList(response)
        setReplyInput('')
      })
    })
  }
  const onClickComment = () => {
    if (deleteComment) return
    //mypage에서
    navigate(`/examinfo/detail/${postId}`)
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  useEffect(() => {
    findAllChild({
      parentCommentId: commentId,
      postId: postId,
    }).then((res) => {
      if (res) {
        const response = res as FindAllChildResponseProps
        setCurrentReplyList(response)
      }
    })
  }, [])

  return (
    <>
      <Root onClick={closeEllipsisModal} ref={ref}>
        {deleteComment && <EllipsisButton onClick={toggleEllipsisModal}></EllipsisButton>}
        {isEllipsisOpen && (
          <EllipsisModal onClick={onClickModal}>
            <EllipsisEditButton onClick={onClickEllipsisEditButton}>수정</EllipsisEditButton>
            <EllipsisDeleteButton onClick={onClickEllipsisDeleteButton}>삭제</EllipsisDeleteButton>
          </EllipsisModal>
        )}
        <LeftContainer>
          <UpperTypoWrapper>
            <CommentOwnerNickname>{memberName}</CommentOwnerNickname>
            {isAuthor && <AuthorIcon>글쓴이</AuthorIcon>}
            <Date>{updatedAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</Date>
          </UpperTypoWrapper>
          {isEditing ? (
            <EditInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} ref={inputRef} />
          ) : (
            <Comment onClick={onClickComment} className={deleteComment ? '' : 'mypage_comment'}>
              {currentContent}
            </Comment>
          )}
          {deleteComment && (
            <ReplyButton onClick={onClickReplyButton}>
              답글 <ReplyCount>{currentReplyList.length}</ReplyCount>
            </ReplyButton>
          )}
        </LeftContainer>
        <LikeButton onClick={onClickLikeButton}>
          <HeartIcon fill={isLiked ? `${HEART_COLOR}` : 'none'} />
          {currentLikeCount}
        </LikeButton>
        <DeleteCommentModal
          closeModal={closeDeleteCommentModal}
          deleteComment={deleteComment}
          isOpen={isDeleteCommentModalOpen}
        />
      </Root>
      {isReplying && (
        <>
          {currentReplyList?.map((reply) => (
            <ExamInfoReply deleteComment={deleteReply(reply.commentId)} key={reply.commentId} {...reply} />
          ))}
          <ReplyInputWrapper>
            <ReplyMark />
            <ReplyRightWrapper>
              <UserNickname>{userAuthInfo.name}</UserNickname>
              <ReplyInput placeholder="대댓글을 남겨보세요." onChange={onReplyInputChange} value={replyInput} />
              <ReplyRegisterButton onClick={onClickReplyRegisterButton} icon="register">
                댓글등록
              </ReplyRegisterButton>
            </ReplyRightWrapper>
          </ReplyInputWrapper>
        </>
      )}
    </>
  )
}
export const ExamInfoComment = forwardRef(ExamInfoCommentComponent)
