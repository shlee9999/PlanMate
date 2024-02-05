import * as s from './styled'
import React, { FC } from 'react'
import { MAX_DDAY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useDdayCalendarPage } from './useDdayCalendarPage'
import { formatTwoDigits } from 'utils'

type DdayCalendarProps = {
  className?: string
}

export const DdayCalendarPage: FC<DdayCalendarProps> = ({ className }) => {
  const {
    dDayList,
    setSelectedDateProps,
    setDdayTitle,
    setIsEditing,
    setSelectedDDayId,
    isLoading,
    isEditing,
    handleSubmit,
    registerInput,
    selectedDateProps,
    onClickDelete,
    onClickBackButton,
    onSubmit,
  } = useDdayCalendarPage()
  return (
    <s.DdayCalendarPage className={className}>
      <s.MainContainer>
        <s.BoxContainer>
          <s.StyledDDayContainer
            dDayList={dDayList}
            title="D-DAY 관리"
            description="원하는 디데이를 고정해보세요!"
            selectable
            setSelectedDate={setSelectedDateProps}
            setDdayName={setDdayTitle}
            setIsEditing={setIsEditing}
            setSelectedDDayId={setSelectedDDayId}
            isDDayLoading={isLoading}
            isEditing={isEditing}
          >
            <s.BackButton onClick={onClickBackButton} />
          </s.StyledDDayContainer>
          <s.AddDdayBox $isEditing={isEditing} title={`D-DAY ${isEditing ? '수정' : '추가'}`} right>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
              <s.DdayNameRow>
                <s.DdayName>제목</s.DdayName>
                <s.DdayNameInput
                  placeholder={`디데이 제목을 입력해주세요. (최대 ${MAX_DDAY_CHARACTER_COUNT}자)`}
                  {...registerInput('dDayTitle', { maxLength: MAX_DDAY_CHARACTER_COUNT })}
                />
              </s.DdayNameRow>
              <s.DdayDateRow>
                <s.DdayDateHeader>날짜</s.DdayDateHeader>
                <s.DdayDate>
                  {selectedDateProps.year +
                    '.' +
                    formatTwoDigits(+selectedDateProps.month) +
                    '.' +
                    formatTwoDigits(selectedDateProps.date)}
                </s.DdayDate>
              </s.DdayDateRow>
              <s.CalendarBox>
                <s.StyledCalendar headerButtonLayout="center" yearHeader={true} />
              </s.CalendarBox>
              <s.ActionButtonContainer>
                {isEditing ? (
                  <s.EditButton icon={'register'}>수정</s.EditButton>
                ) : (
                  <s.RegisterButton icon={'check'}>등록</s.RegisterButton>
                )}
                {isEditing && (
                  <s.DeleteButton icon={'trash'} color="red" onClick={onClickDelete}>
                    삭제
                  </s.DeleteButton>
                )}
              </s.ActionButtonContainer>
            </s.Form>
          </s.AddDdayBox>
        </s.BoxContainer>
      </s.MainContainer>
    </s.DdayCalendarPage>
  )
}
