import * as s from './styled'
import { FC } from 'react'
import { deserializeContent } from 'utils'
import { Editor } from 'react-draft-wysiwyg'
import { HEART_COLOR, SCRAP_COLOR } from 'constants/color'
import { HeartIcon, ScrapIcon } from 'assets/SvgComponents'
import { DeletePostModal } from '../components'
import { useExamInfoDetail } from './useExamInfoDetail'
import { CommentContainer } from './CommentContainer/CommentContainer'

type ExamInfoDetailPageProps = {
  mode: 'examinfo' | 'notice'
}

export const ExamInfoDetailPage: FC<ExamInfoDetailPageProps> = ({ mode }) => {
  const {
    postTagList,
    nickname,
    title,
    createdAt,
    currentContent,
    isDeletePostModalOpen,
    onEditorStateChange,
    deletePost,
    onClickEditTypo,
    closeDeletePostModal,
    onClickLikeButton,
    onClickScrapButton,
    onClickDeleteTypo,
    isMyPost,
    isDetailLoading,
    isEditing,
    editorState,
    onClickEditCompleteButton,
    detailData,
    postId,
  } = useExamInfoDetail({ mode })

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

      {isDetailLoading ? (
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
          <CommentContainer postId={postId} mode={mode} />
        </>
      )}
      {isDeletePostModalOpen && <DeletePostModal closeModal={closeDeletePostModal} deletePost={deletePost} />}
    </s.ExamInfoDetail>
  )
}
