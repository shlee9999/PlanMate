import { FC, useState } from 'react'
import * as s from './styled'
import { useCommentData } from '../hooks/useCommentData'
import { NoContentDescription, Pagination } from 'components'
import { Comment } from 'components'
import { useCreateCommentMutation } from 'pages/ExamInfo/hooks/mutations'
import { MAX_COMMENT_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useForm } from 'hooks'
import { useDetailData } from '../hooks/useDetailData'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
type CommentContainerProps = {
  postId: number
  mode: 'examinfo' | 'notice'
}
type CommentForm = {
  comment: string
}
export const CommentContainer: FC<CommentContainerProps> = ({ postId, mode }) => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { commentData, isCommentLoading, commentDtoList, totalCount, totalPages } = useCommentData({
    postId,
    currentPage,
  })
  const {
    registerTextarea: registerCommentInput,
    handleSubmit: handleCommentSubmit,
    setValue: setCommentInputValue,
  } = useForm<CommentForm>()
  const { isMyPost } = useDetailData({
    postId,
    mode,
  })
  const mutateCreateComment = useCreateCommentMutation()
  const onCommentSubmit = ({ comment }: CommentForm): void => {
    mutateCreateComment({
      currentPage,
      content: comment,
      postId,
      callBack: () => setCommentInputValue('comment', ''),
      isPostAuthor: isMyPost,
      // id 비교로 변경해야함
      memberName: userAuthInfo.nickname,
    })
  }

  const renderCommentInputWrapper = () => (
    <>
      <s.CommentForm onSubmit={handleCommentSubmit(onCommentSubmit)}>
        <s.UserNickname>{userAuthInfo.nickname}</s.UserNickname>
        <s.CommentInput
          placeholder="댓글을 남겨보세요."
          {...registerCommentInput('comment', { maxLength: MAX_COMMENT_CHARACTER_COUNT })}
        />
        <s.CommentRegisterButton icon="register">댓글등록</s.CommentRegisterButton>
      </s.CommentForm>
    </>
  )
  return (
    <>
      {commentDtoList.length !== 0 && renderCommentInputWrapper()}
      <s.CommentWrapper>
        <s.CommentTitle>
          댓글 <s.CommentCount>{totalCount}</s.CommentCount>개
        </s.CommentTitle>
        <s.CommentContainer className={commentDtoList?.length !== 0 ? '' : 'no_content'}>
          {commentData?.commentDtoList?.length !== 0
            ? commentData?.commentDtoList?.map((comment) => (
                <Comment
                  key={comment.commentId}
                  commentId={comment.commentId}
                  isPostAuthor={comment.isPostAuthor}
                  likeCount={comment.likeCount}
                  memberName={comment.memberName}
                  updatedAt={comment.updatedAt}
                  content={comment.content}
                  isMyHearted={comment.isMyHearted}
                  postId={+postId}
                  currentPage={currentPage}
                  isAuthor={comment.isAuthor}
                />
              ))
            : !isCommentLoading && (
                <>
                  <NoContentDescription icon="pencil" descriptions={['아직 댓글이 없어요', '첫 댓글을 남겨볼까요?']} />
                  {renderCommentInputWrapper()}
                </>
              )}
        </s.CommentContainer>
      </s.CommentWrapper>
      {!isCommentLoading && (
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      )}
    </>
  )
}
