import * as s from './styled'
import { FC } from 'react'
import { deserializeContent } from 'utils'
import { Editor } from 'react-draft-wysiwyg'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'
import { HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { NoContentDescription, Pagination, Comment } from 'components'
import { DeletePostModal } from '../components'
import { MAX_COMMENT_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useExamInfoDetail } from './useExamInfoDetail'

type ExamInfoDetailPageProps = {
  mode: 'examinfo' | 'notice'
}

export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const {
    postTagList,
    nickname,
    title,
    createdAt,
    setCurrentPage,
    currentContent,
    isDeletePostModalOpen,
    registerCommentInput,
    handleCommentSubmit,
    onEditorStateChange,
    commentDtoList,
    totalCount,
    totalPages,
    deletePost,
    onClickEditTypo,
    onCommentSubmit,
    closeDeletePostModal,
    onClickLikeButton,
    onClickScrapButton,
    onClickDeleteTypo,
    isMyPost,
    isDetailLoading,
    isCommentLoading,
    currentPage,
    isEditing,
    editorState,
    onClickEditCompleteButton,
    detailData,
    postId,
    commentData,
    userAuthInfo,
  } = useExamInfoDetail({ mode })
  const renderCommentInputWrapper = () => (
    <>
      <s.CommentForm onSubmit={handleCommentSubmit(onCommentSubmit)}>
        <s.UserNickname>{userAuthInfo.name}</s.UserNickname>
        <s.CommentInput
          placeholder="댓글을 남겨보세요."
          {...registerCommentInput('comment', { maxLength: MAX_COMMENT_CHARACTER_COUNT })}
        />
        <s.CommentRegisterButton icon="register">댓글등록</s.CommentRegisterButton>
      </s.CommentForm>
    </>
  )

  return (
    <s.ExamInfoDetail>
      <s.UpperTypoWrapper>
        <s.LeftTypoWrapper>
          <s.TagWrapper>
            {postTagList?.map((tag, index) => (
              <s.Tag key={index}>{tag}</s.Tag>
            ))}
          </s.TagWrapper>
          <s.TitleTypoWrapper>
            <s.TitleTypo>{title}</s.TitleTypo>
            <s.UpdatedDate>{createdAt.replace(/-/g, '.').replace('T', ' ').slice(0, -3)}</s.UpdatedDate>
          </s.TitleTypoWrapper>
        </s.LeftTypoWrapper>
        <s.RightTypoWrapper>
          <s.PostOwnerNickname>{nickname}</s.PostOwnerNickname>
          {isMyPost && (
            <>
              <s.EditTypo onClick={onClickEditTypo}>수정</s.EditTypo>
              <s.DistributionLine />
              <s.DeleteTypo onClick={onClickDeleteTypo}>삭제</s.DeleteTypo>
            </>
          )}
        </s.RightTypoWrapper>
      </s.UpperTypoWrapper>

      {isDetailLoading || (isCommentLoading && currentPage === 0) ? (
        <s.DetailSpinner>Loading...</s.DetailSpinner>
      ) : (
        <>
          <s.ContentWrapper>
            {isEditing ? (
              <s.EditorWrapper>
                <Editor
                  wrapperClassName="wrapper-class"
                  editorClassName="editor"
                  toolbarClassName="toolbar-class"
                  toolbar={{
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: false },
                  }}
                  placeholder="내용을 작성해주세요"
                  localization={{
                    locale: 'ko',
                  }}
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                />
                <s.EditCompleteButton onClick={onClickEditCompleteButton} icon="register">
                  수정완료
                </s.EditCompleteButton>
              </s.EditorWrapper>
            ) : (
              <s.Content dangerouslySetInnerHTML={{ __html: deserializeContent(currentContent) }} />
            )}

            <s.IconContainer>
              <HeartIcon fill={detailData?.isMyHearted ? `${HEART_COLOR}` : 'none'} onClick={onClickLikeButton} />
              <s.Count onClick={onClickLikeButton}>{detailData?.likeCount}</s.Count>
              <ScrapIcon fill={detailData?.isMyScraped ? `${SCRAP_COLOR}` : 'none'} onClick={onClickScrapButton} />
              <s.Count onClick={onClickScrapButton}>{detailData?.scrapCount}</s.Count>
            </s.IconContainer>
          </s.ContentWrapper>

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
                      <NoContentDescription
                        icon="pencil"
                        descriptions={['아직 댓글이 없어요', '첫 댓글을 남겨볼까요?']}
                      />
                      {renderCommentInputWrapper()}
                    </>
                  )}
            </s.CommentContainer>
          </s.CommentWrapper>
        </>
      )}
      {isDeletePostModalOpen && <DeletePostModal closeModal={closeDeletePostModal} deletePost={deletePost} />}
      {!isCommentLoading && !isDetailLoading && (
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      )}
    </s.ExamInfoDetail>
  )
}
