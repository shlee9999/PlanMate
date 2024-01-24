import { FC, ReactNode, useEffect, useState } from 'react'
import { DDayEntityType } from 'api/types/ScheduleType'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import { CenterSpinner } from 'commonStyled'
import * as s from './styled'

type DDayContainerProps = {
  className?: string
  dDayList: DDayEntityType[]
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
  selectable?: boolean
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
  selectable = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const onClickDDayItem =
    (index: number, targetDate: string, eventName: string, scheduleId: number) => (e: React.MouseEvent) => {
      e.stopPropagation()
      setSelectedDDayId && setSelectedDDayId(scheduleId)
      setSelectedDate && setSelectedDate(dateUtils.getDateProps(targetDate))
      setEventName && setEventName(eventName)
      setSelectedIndex((prev) => (prev === index ? -1 : index))
    }
  useEffect(() => {
    setIsEditing && setIsEditing(selectedIndex === -1 ? false : true)
    selectedIndex === -1 && setEventName && setEventName('')
  }, [selectedIndex])
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
            <s.StyledDDayItem
              key={dday.dDayId}
              scheduleId={dday.dDayId}
              title={dday.title}
              targetDate={dday.targetDate}
              isFixed={dday.isFixed}
              isSelected={selectedIndex === index}
              onClick={onClickDDayItem(index, dday.targetDate, dday.title, dday.dDayId)}
              selectable={selectable}
            />
          ))}
        </s.DDayList>
      )}
      {children}
    </s.Root>
  )
}
