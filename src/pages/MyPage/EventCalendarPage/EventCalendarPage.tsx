import { FC, useState } from 'react'
import { DDayItem } from '../components'
import { dateUtils, formatTwoDigits } from 'utils'
import { ActionButton } from 'components'
import { useNavigate } from 'react-router-dom'
import addScheduleMutation from '../hooks/addScheduleMutation'
import { useQuery } from 'react-query'
import { FindAllScheduleResponseProps, findAllSchedule } from 'api/schedule/findAllSchedule'
import * as s from './styled'

type EventCalendarProps = {
  className?: string
}

export const EventCalendarPage: FC<EventCalendarProps> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState(dateUtils.getDateProps(new Date()))
  const [eventName, setEventName] = useState('')
  const { data: dDayList, isLoading } = useQuery<FindAllScheduleResponseProps>(['dDayList'], () => findAllSchedule())
  const onClickNextYear = () => setSelectedDate(dateUtils.getFutureDateProps(selectedDate, 'year'))
  const onClickPrevYear = () => setSelectedDate(dateUtils.getFutureDateProps(selectedDate, 'year', -1))
  const navigate = useNavigate()
  const mutateAddSchedule = addScheduleMutation()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (eventName === '') return
    mutateAddSchedule({
      targetDate: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
      title: eventName,
    })
  }
  return (
    <s.Root className={className}>
      <s.MainContainer>
        <s.BackButton onClick={() => navigate(-1)} />
        <s.BoxContainer>
          <s.EventBox title="D-DAY 관리" desciption="원하는 디데이를 고정해보세요!">
            <s.DDayContainer>
              {dDayList?.map((dday, index) => (
                <DDayItem
                  key={dday.scheduleId}
                  id={dday.scheduleId}
                  title={dday.title}
                  targetDate={dday.targetDate}
                  fixDDay={() => console.log('fix')}
                  isFixed={index === 0}
                />
              ))}
            </s.DDayContainer>
          </s.EventBox>

          <s.AddEventBox title="D-DAY 추가" right>
            <s.Form onSubmit={onSubmit}>
              <s.EventNameRow>
                <s.EventName>제목</s.EventName>
                <s.EventNameInput
                  placeholder="디데이 제목을 입력해주세요."
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
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
                <ActionButton icon={'check'}>등록</ActionButton>
              </s.ActionButtonContainer>
            </s.Form>
          </s.AddEventBox>
        </s.BoxContainer>
      </s.MainContainer>
    </s.Root>
  )
}
