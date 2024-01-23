import { FC, ReactNode, useState } from 'react'
import { DDayItem } from '..'
import { DDayType } from 'api/types/ScheduleType'
import { DateProps } from 'pages/Stats/StatsPage'
import { dateUtils } from 'utils'
import * as s from './styled'
import { CenterSpinner } from 'commonStyled'

type DDayContainerProps = {
  className?: string
  dDayList: DDayType[]
  setSelectedDate?: (date: DateProps) => void
  setEventName?: (name: string) => void
  setIsEditing?: (state: boolean) => void
  setSelectedDDayId?: (scheduleId: number) => void
  isDDayLoading?: boolean
  onClickViewMore?: () => void
  viewMore?: boolean
  title?: string
  description?: string
  children?: ReactNode
}

export const DDayContainer: FC<DDayContainerProps> = ({
  className,
  dDayList,
  setEventName,
  setSelectedDate,
  setIsEditing,
  setSelectedDDayId,
  isDDayLoading,
  onClickViewMore,
  viewMore,
  title,
  description,
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const onClickDDayItem =
    (index: number, targetDate: string, eventName: string, scheduleId: number) => (e: React.MouseEvent) => {
      e.stopPropagation()
      setSelectedDDayId && setSelectedDDayId(scheduleId)
      setSelectedDate && setSelectedDate(dateUtils.getDateProps(targetDate))
      setEventName && setEventName(eventName)
      setIsEditing && setIsEditing(true)
      setSelectedIndex(index)
    }
  return (
    <s.Root className={className} title={title} description={description}>
      {viewMore && (
        <s.ViewMore onClick={onClickViewMore}>
          더보기
          <s.NextArrow />
        </s.ViewMore>
      )}
      {isDDayLoading ? (
        <CenterSpinner />
      ) : (
        <s.DDayList>
          {dDayList?.map((dday, index) => (
            <DDayItem
              key={dday.scheduleId}
              scheduleId={dday.scheduleId}
              title={dday.title}
              targetDate={dday.targetDate}
              fixDDay={() => console.log('fix')}
              isFixed={index === 0}
              isSelected={selectedIndex === index}
              onClick={onClickDDayItem(index, dday.targetDate, dday.title, dday.scheduleId)}
            />
          ))}
        </s.DDayList>
      )}
      {children}
    </s.Root>
  )
}
