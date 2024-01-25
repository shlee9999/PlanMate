import React, { FC, useState } from 'react'
import { dateUtils, formatTwoDigits } from 'utils'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FindAllDdayResponseProps, findAllDday } from 'api/dday/findAllDday'
import { useAddDdayMutation, useEditDdayMutation, useDeleteDdayMutation } from '../hooks'
import * as s from './styled'
import { MAX_DDAY_CHARACTER_COUNT } from 'constants/maxCharacterCount'

type EventCalendarProps = {
  className?: string
}

export const DdayCalendarPage: FC<EventCalendarProps> = ({ className }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedDDayId, setSelectedDDayId] = useState(-1)
  const [selectedDate, setSelectedDate] = useState(dateUtils.getDateProps(new Date()))
  const [eventName, setEventName] = useState('')
  const { data: dDayList, isLoading } = useQuery<FindAllDdayResponseProps>(['dDayList'], () => findAllDday())
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_DDAY_CHARACTER_COUNT) return
    setEventName(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (eventName === '') return
    if (!isEditing) {
      mutateAddSchedule({
        targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
        title: eventName,
        callBack: () => setEventName(''),
      })
      setEventName('')
    } else {
      // 수정
      mutateEditSchedule({
        targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
        title: eventName,
        dDayId: selectedDDayId,
        callBack: () => setEventName(''),
      })
    }
  }

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
            setEventName={setEventName}
            setIsEditing={setIsEditing}
            setSelectedDDayId={setSelectedDDayId}
            isDDayLoading={isLoading}
            isEditing={isEditing}
          >
            <s.BackButton onClick={() => navigate(-1)} />
          </s.StyledDDayContainer>
          <s.AddEventBox $isEditing={isEditing} title={`D-DAY ${isEditing ? '수정' : '추가'}`} right>
            <s.Form onSubmit={onSubmit}>
              <s.EventNameRow>
                <s.EventName>제목</s.EventName>
                <s.EventNameInput
                  placeholder="디데이 제목을 입력해주세요. (최대 15자)"
                  value={eventName}
                  onChange={onChange}
                  onClick={(e) => e.stopPropagation()}
                />
              </s.EventNameRow>
              <s.EventDateRow $gap={16}>
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
                  <s.EditButton onClick={(e) => e.stopPropagation()} icon={'register'}>
                    수정
                  </s.EditButton>
                ) : (
                  <s.AddButton icon={'check'}>등록</s.AddButton>
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
