import * as s from './styled'
import { Pagination, Display, PostItem } from 'components'
import { examInfoTagList } from 'constants/tagList'
import { TagContainer } from './TagContainer/TagContainer'
import { DISPLAY } from 'types'
import { useExamInfoPage } from './useExamInfoPage'

export const ExamInfoPage = () => {
  const {
    isLoading,
    examInfoList,
    totalPage,
    onClickBulletinButton,
    selectorProps,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
  } = useExamInfoPage()
  return (
    <s.ExamInfoPage>
      <s.TypoWrapper>
        <s.UpperDescriptionTypo>유용한 정보를 찾아볼까요? </s.UpperDescriptionTypo>
        <s.TitleTypo>수험정보 👀</s.TitleTypo>
        <Display on={DISPLAY.XLARGE}>
          <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
        </Display>
        <Display on={DISPLAY.LARGE}>
          <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
        </Display>
      </s.TypoWrapper>
      <TagContainer tagList={examInfoTagList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      {/* Spinner 때문에 임시 변환 */}
      <s.ExamInfoWrapper>
        {isLoading ? (
          <s.PostSpinner>Loading...</s.PostSpinner>
        ) : examInfoList?.length !== 0 ? (
          examInfoList?.map((examInfo) => <PostItem {...examInfo} key={examInfo.postId} />)
        ) : (
          <s.NoContent icon="pencil" descriptions={['아직 게시글이 없어요', '첫 게시글을 올려볼까요?']} />
        )}
        <s.BulletinButton onClick={onClickBulletinButton} icon="register">
          글쓰기
        </s.BulletinButton>
        <Display on={DISPLAY.MEDIUM}>
          <s.StyledTagSelector {...selectorProps} />
        </Display>
        <Display on={DISPLAY.SMALL}>
          <s.StyledTagSelector {...selectorProps} />
        </Display>
      </s.ExamInfoWrapper>
      <s.PaginationWrapper>
        {!isLoading && <Pagination currentPage={currentPage} totalPages={totalPage} setCurrentPage={setCurrentPage} />}
      </s.PaginationWrapper>
    </s.ExamInfoPage>
  )
}
