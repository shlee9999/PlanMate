import * as s from './styled'
import React, { FC, useEffect, useRef, useState } from 'react'
import { dateUtils, formatTwoDigits } from 'utils'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FindAllDdayResponseProps, findAllDday } from 'api/dday/findAllDday'
import { useAddDdayMutation, useEditDdayMutation, useDeleteDdayMutation } from '../hooks'
import { MAX_DDAY_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { QueryKeys } from 'types'
import { useForm } from 'hooks'

type EventCalendarProps = {
  className?: string
}
type IForm = {
  dDayTitle: string
}
export const DdayCalendarPage: FC<EventCalendarProps> = ({ className }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedDDayId, setSelectedDDayId] = useState(-1)
  const [selectedDate, setSelectedDate] = useState(dateUtils.getDateProps(new Date()))
  const { registerInput, handleSubmit, setValue, inputFocus } = useForm<IForm>()
  const setDdayTitle = (title: string) => setValue('dDayTitle', title)
  const { data: dDayList, isLoading } = useQuery<FindAllDdayResponseProps>([QueryKeys.dDayList], () => findAllDday())
  const onClickNextYear = () => setSelectedDate(dateUtils.getFutureDateProps(selectedDate, 'year'))
  const onClickPrevYear = () => setSelectedDate(dateUtils.getFutureDateProps(selectedDate, 'year', -1))
  const navigate = useNavigate()
  const mutateAddSchedule = useAddDdayMutation()
  const mutateEditSchedule = useEditDdayMutation()
  const mutateDeleteSchedule = useDeleteDdayMutation()
  const onClickDelete = (e: React.MouseEvent) => {
    e.preventDefault() // * submit 방지
    mutateDeleteSchedule({ dDayId: selectedDDayId, callBack: () => setIsEditing(false) })
  }
  const onSubmit = ({ dDayTitle }: IForm) => {
    if (!dateUtils.isFuture(dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }), true)) return
    //* 과거 시간은 추가 수정 X
    if (!isEditing) {
      //* 추가
      mutateAddSchedule({
        targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
        title: dDayTitle,
        callBack: () => {
          setDdayTitle('')
          setSelectedDate(dateUtils.getDateProps(new Date()))
        },
      })
    } else {
      //* 수정
      mutateEditSchedule({
        targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
        title: dDayTitle,
        dDayId: selectedDDayId,
        callBack: () => {
          setDdayTitle('')
          setSelectedDate(dateUtils.getDateProps(new Date()))
        },
      })
    }
  }

  useEffect(() => {
    inputFocus('dDayTitle')
  }, [selectedDate])

  return (
    <s.Root className={className}>
      <s.MainContainer>
        <s.BoxContainer>
          <s.StyledDDayContainer
            dDayList={dDayList}
            title="D-DAY 관리"
            description="원하는 디데이를 고정해보세요!"
            selectable
            setSelectedDate={setSelectedDate}
            setEventName={setDdayTitle}
            setIsEditing={setIsEditing}
            setSelectedDDayId={setSelectedDDayId}
            isDDayLoading={isLoading}
            isEditing={isEditing}
          >
            <s.BackButton onClick={() => navigate(-1)} />
          </s.StyledDDayContainer>
          <s.AddEventBox $isEditing={isEditing} title={`D-DAY ${isEditing ? '수정' : '추가'}`} right>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
              <s.EventNameRow>
                <s.EventName>제목</s.EventName>
                <s.EventNameInput
                  placeholder={`디데이 제목을 입력해주세요. (최대 ${MAX_DDAY_CHARACTER_COUNT}자)`}
                  {...registerInput('dDayTitle', { maxLength: MAX_DDAY_CHARACTER_COUNT })}
                />
              </s.EventNameRow>
              <s.EventDateRow>
                <s.EventDateHeader>날짜</s.EventDateHeader>
                <s.EventDate>
                  {selectedDate.year +
                    '.' +
                    formatTwoDigits(+selectedDate.month + 1) +
                    '.' +
                    formatTwoDigits(selectedDate.date)}
                </s.EventDate>
              </s.EventDateRow>
              <s.CalendarBox>
                <s.CalendarHeader>
                  <s.PrevYearButton onClick={onClickPrevYear} />
                  <s.EventYear>{selectedDate.year}</s.EventYear>
                  <s.NextYearButton onClick={onClickNextYear} />
                </s.CalendarHeader>
                <s.EventCalendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  headerButtonLayout="center"
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
          </s.AddEventBox>
        </s.BoxContainer>
      </s.MainContainer>
    </s.Root>
  )
}
