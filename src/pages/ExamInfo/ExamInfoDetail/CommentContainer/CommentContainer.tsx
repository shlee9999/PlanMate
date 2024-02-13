import { FC, useState } from 'react'
import * as s from './styled'
import { useCommentData } from '../hooks/useCommentData'
import { Pagination } from 'components'
import { Comment } from 'components'
import { CommentForm } from './CommentForm'
type CommentContainerProps = {
  postId: number
  mode: 'examinfo' | 'notice'
}

export const CommentContainer: FC<CommentContainerProps> = ({ postId, mode }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { isCommentLoading, commentDtoList, totalCount, totalPages } = useCommentData({
    postId,
    currentPage,
  })

  if (isCommentLoading) return <CommentForm postId={postId} mode={mode} currentPage={currentPage} />
  return (
    <>
      {commentDtoList.length !== 0 && <CommentForm postId={postId} mode={mode} currentPage={currentPage} />}
      <s.CommentWrapper>
        <s.CommentTitle>
          댓글 <s.CommentCount>{totalCount}</s.CommentCount>개
        </s.CommentTitle>
        <s.CommentContainer className={commentDtoList?.length !== 0 ? '' : 'no_content'}>
          {commentDtoList.length !== 0 ? (
            commentDtoList.map((comment) => <Comment key={comment.commentId} {...comment} currentPage={currentPage} />)
          ) : (
            <>
              <s.NoCommentDescription icon="pencil" descriptions={['아직 댓글이 없어요', '첫 댓글을 남겨볼까요?']} />
              {<CommentForm postId={postId} mode={mode} currentPage={currentPage} />}
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
