import * as s from './styled'
import { FC } from 'react'
import { ResignModal } from './components'
import { ProfileEditModal } from 'pages/MyPage/components/'
import { GoogleCustom } from 'assets/SvgComponents'
import { CenterSpinner } from 'commonStyled'
import { useMyPage } from './useMyPage'

export const MyPage: FC = () => {
  const {
    isLoading,
    list,
    currentTabIndex,
    Component,
    onClickRoot,
    onClickEllipsisButton,
    onClickModal,
    openProfileEditModal,
    userAuthInfo,
    openResignModal,
    dDayList,
    isDdayLoading,
    tabInfoList,
    currentPage,
    totalPages,
    closeProfileEditModal,
    onClickViewMore,
    closeResignModal,
    isResignModalOpen,
    isProfileEditModalOpen,
    setCurrentPage,
    onClickTabItem,
    isEllipsisModalOpen,
    title,
  } = useMyPage()
  const renderTabContent = () => {
    if (isLoading) return <CenterSpinner>Loading...</CenterSpinner>
    if (list.length === 0) return <s.StyledNoContentDescription icon={'pencil'} descriptions={[`${title}이 없어요!`]} />
    if (currentTabIndex === 0 || currentTabIndex === 2)
      // * 내가 작성한 글, 내가 스크랩한 글
      return (
        <>
          {list.map((item) => (
            <Component {...item} key={item.postId} />
          ))}
        </>
      )
    // * 내가 작성한 댓글
    return (
      <>
        {list.map((item) => (
          <Component key={item.commentId} {...item} currentPage={currentPage} />
        ))}
      </>
    )
  }
  return (
    <s.MyPage>
      <s.Container onClick={onClickRoot}>
        <s.TitleWrapper>
          <s.Nickname>{userAuthInfo.nickname}</s.Nickname>
          님의 <s.Title>마이페이지 👋</s.Title>
        </s.TitleWrapper>
        <s.MainContainer>
          <s.LeftContainer>
            <s.ProfileContainer title="프로필">
              <s.UserName>{userAuthInfo.nickname}</s.UserName>님
              <s.Email>
                <GoogleCustom />
                {userAuthInfo.email}
              </s.Email>
              <s.EllipsisImg onClick={onClickEllipsisButton} />
              {isEllipsisModalOpen && (
                <s.EllipsisModal onClick={onClickModal}>
                  <s.EllipsisEditButton onClick={openProfileEditModal}>프로필 수정</s.EllipsisEditButton>
                  <s.EllipsisResignButton onClick={openResignModal}>탈퇴하기</s.EllipsisResignButton>
                </s.EllipsisModal>
              )}
            </s.ProfileContainer>
            <s.StyledDDayContainer
              viewMore
              title="D-DAY 관리"
              onClickViewMore={onClickViewMore}
              dDayList={dDayList}
              isDDayLoading={isDdayLoading}
            />
          </s.LeftContainer>
          <s.RightContainer title="나의 활동">
            <s.TabSelector>
              <s.TabRow>
                {tabInfoList.map((tabInfo, index) => (
                  <s.TabItem $isSelected={currentTabIndex === index} onClick={onClickTabItem(index)} key={index}>
                    {tabInfo.title}
                    {currentTabIndex === index && (
                      <s.SelectedLine layoutId="selected_line" transition={{ duration: 0.2 }} />
                    )}
                  </s.TabItem>
                ))}
              </s.TabRow>
              <s.TabRow />
            </s.TabSelector>
            <s.TabContentContainer>
              {renderTabContent()}
              <s.StyledPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </s.TabContentContainer>
          </s.RightContainer>
        </s.MainContainer>
        <ProfileEditModal
          closeModal={closeProfileEditModal}
          defaultNickname={userAuthInfo.nickname}
          isOpen={isProfileEditModalOpen}
        />

        {isResignModalOpen && <ResignModal closeModal={closeResignModal} />}
      </s.Container>
    </s.MyPage>
  )
}
