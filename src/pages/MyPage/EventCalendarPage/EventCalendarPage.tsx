import { FC, useState } from 'react'
import { DDayItem } from '../components'
import { dateUtils, formatTwoDigits } from 'utils'
import { ActionButton } from 'components'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FindAllScheduleResponseProps, findAllSchedule } from 'api/schedule/findAllSchedule'
import useAddScheduleMutation from '../hooks/useAddScheduleMutation'
import useEditScheduleMutation from '../hooks/useEditScheduleMutation'
import * as s from './styled'

type EventCalendarProps = {
  className?: string
}

export const EventCalendarPage: FC<EventCalendarProps> = ({ className }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedDDayId, setSelectedDDayId] = useState(-1)
  const [selectedDate, setSelectedDate] = useState(dateUtils.getDateProps(new Date()))
  const [eventName, setEventName] = useState('')
  const { data: dDayList } = useQuery<FindAllScheduleResponseProps>(['dDayList'], () => findAllSchedule())
  const onClickNextYear = () => setSelectedDate(dateUtils.getFutureDateProps(selectedDate, 'year'))
  const onClickPrevYear = () => setSelectedDate(dateUtils.getFutureDateProps(selectedDate, 'year', -1))
  const navigate = useNavigate()
  const mutateAddSchedule = useAddScheduleMutation()
  const mutateEditSchedule = useEditScheduleMutation()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (eventName === '') return
    if (!isEditing) {
      mutateAddSchedule({
        targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
        title: eventName,
      })
      setEventName('')
    } else {
      // 수정
      mutateEditSchedule({
        targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
        title: eventName,
        scheduleId: selectedDDayId,
      })
      setEventName('')
    }
  }

  const onClickRoot = () => {
    setSelectedDDayId(-1)
    setIsEditing(false)
  }

  return (
    <s.Root className={className} onClick={onClickRoot}>
      <s.MainContainer>
        <s.BoxContainer>
          <s.StyledDDayContainer
            dDayList={dDayList}
            title="D-DAY 관리"
            description="원하는 디데이를 고정해보세요!"
            selectable
          >
            <s.BackButton onClick={() => navigate(-1)} />
          </s.StyledDDayContainer>
          <s.AddEventBox title={`D-DAY ${isEditing ? '수정' : '추가'}`} right>
            <s.Form onSubmit={onSubmit}>
              <s.EventNameRow>
                <s.EventName>제목</s.EventName>
                <s.EventNameInput
                  placeholder="디데이 제목을 입력해주세요."
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.preventDefault()
                  }}
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
                <ActionButton icon={'close'}>취소</ActionButton>
                {isEditing ? (
                  <ActionButton onClick={(e) => e.stopPropagation()} icon={'register'}>
                    수정
                  </ActionButton>
                ) : (
                  <ActionButton icon={'check'}>등록</ActionButton>
                )}
              </s.ActionButtonContainer>
            </s.Form>
          </s.AddEventBox>
        </s.BoxContainer>
      </s.MainContainer>
    </s.Root>
  )
}
