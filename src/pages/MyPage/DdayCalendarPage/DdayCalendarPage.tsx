import * as s from './styled'
import React, { FC, useEffect, useState } from 'react'
import { dateUtils, formatTwoDigits } from 'utils'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FindAllDdayResponseProps, findAllDday } from 'api/dday/findAllDday'
import { useAddDdayMutation, useEditDdayMutation, useDeleteDdayMutation } from '../hooks'
import { MAX_DDAY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { QueryKeys } from 'types'
import { useForm } from 'hooks'

type DdayCalendarProps = {
  className?: string
}
type IForm = {
  dDayTitle: string
}
export const DdayCalendarPage: FC<DdayCalendarProps> = ({ className }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedDDayId, setSelectedDDayId] = useState(-1)
  const [selectedDateProps, setSelectedDateProps] = useState(dateUtils.getTodayDateProps())
  const { registerInput, handleSubmit, setValue, inputFocus } = useForm<IForm>()
  const setDdayTitle = (title: string) => setValue('dDayTitle', title)
  const { data: dDayList, isLoading } = useQuery<FindAllDdayResponseProps>([QueryKeys.dDayList], () => findAllDday())
  const navigate = useNavigate()
  const mutateAddSchedule = useAddDdayMutation()
  const mutateEditSchedule = useEditDdayMutation()
  const mutateDeleteSchedule = useDeleteDdayMutation()
  const onClickDelete = (e: React.MouseEvent) => {
    e.preventDefault() // * submit 방지
    mutateDeleteSchedule({ dDayId: selectedDDayId, callBack: () => setIsEditing(false) })
  }
  const onSubmit = ({ dDayTitle }: IForm) => {
    if (!dateUtils.isTodayOrFuture(selectedDateProps)) return
    //* 과거 시간은 추가 수정 X
    if (!isEditing) {
      //* 추가
      mutateAddSchedule({
        targetDate: dateUtils.getYYYYMMDD(selectedDateProps),
        title: dDayTitle,
        callBack: () => {
          setDdayTitle('')
          setSelectedDateProps(dateUtils.getDateProps(new Date()))
        },
      })
    } else {
      //* 수정
      mutateEditSchedule({
        targetDate: dateUtils.getYYYYMMDD(selectedDateProps),
        title: dDayTitle,
        dDayId: selectedDDayId,
        callBack: () => {
          setDdayTitle('')
        },
      })
    }
  }

  useEffect(() => {
    inputFocus('dDayTitle')
  }, [selectedDateProps])

  return (
    <s.Root className={className}>
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
            <s.BackButton onClick={() => navigate(-1)} />
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
                <s.StyledCalendar
                  selectedDateProps={selectedDateProps}
                  setSelectedDate={setSelectedDateProps}
                  headerButtonLayout="center"
                  yearHeader={true}
                />
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
    </s.Root>
  )
}
