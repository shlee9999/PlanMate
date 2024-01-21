import { FC, useState } from 'react'
import * as s from './styled'
import { DDayItem } from '../components'
import { dateUtils, formatTwoDigits } from 'utils'
import { FlexRow } from 'commonStyled'

type EventCalendarProps = {
  className?: string
}
const sampleDDayList = [
  { scheduleId: 0, memberId: 3, title: '테스트2', targetDate: '2024-08-20', isFixed: true },
  { scheduleId: 1, memberId: 3, title: '테스트3', targetDate: '2024-08-30', isFixed: true },
  { scheduleId: 2, memberId: 3, title: '테스트4', targetDate: '2024-09-20', isFixed: false },
  { scheduleId: 3, memberId: 3, title: '테스트5', targetDate: '2024-10-25', isFixed: false },
  { scheduleId: 4, memberId: 3, title: '테스트6', targetDate: '2024-11-30', isFixed: false },
  { scheduleId: 5, memberId: 3, title: '테스트7', targetDate: '2024-12-31', isFixed: false },
]
export const EventCalendarPage: FC<EventCalendarProps> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState(dateUtils.getDateProps(new Date()))

  return (
    <s.Root className={className}>
      <s.BoxContainer>
        <s.EventBox title="D-DAY 관리" desciption="원하는 디데이를 고정해보세요!">
          <s.DDayContainer>
            {sampleDDayList.map((dday, index) => (
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
        <s.AddEventBox title="D-DAY 추가">
          <FlexRow $gap={16}>
            <s.EventName>제목</s.EventName>
            <s.EventNameInput placeholder="디데이 제목을 입력해주세요." />
          </FlexRow>
          <FlexRow $gap={16}>
            <s.EventDateHeader>날짜</s.EventDateHeader>
            <s.EventDate>
              {selectedDate.year +
                '.' +
                formatTwoDigits(+selectedDate.month + 1) +
                '.' +
                formatTwoDigits(selectedDate.date)}
            </s.EventDate>
          </FlexRow>
          <s.CalendarBox>
            <s.EventCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </s.CalendarBox>
        </s.AddEventBox>
      </s.BoxContainer>
    </s.Root>
  )
}
