import * as s from './styled'
import { FC, ReactNode, useEffect, useState } from 'react'
import { DDayEntityType } from 'api/types/ScheduleType'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import { CenterSpinner } from 'commonStyled'

type DdayContainerProps = {
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
  isEditing?: boolean
}

export const DdayContainer: FC<DdayContainerProps> = ({
  className,
  dDayList = [],
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
  isEditing,
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
  const filteredDdayList = dDayList.filter((dDay) => dateUtils.isFuture(dDay.targetDate, true))

  useEffect(() => {
    setIsEditing && setIsEditing(selectedIndex === -1 ? false : true)
    selectedIndex === -1 && setEventName && setEventName('')
  }, [selectedIndex])

  useEffect(() => {
    !isEditing && setSelectedIndex(-1)
  }, [isEditing])
  return (
    <s.Root className={className} title={title} description={description}>
      {viewMore && (
        <s.ViewMore onClick={onClickViewMore}>
          더보기
          <s.NextArrow />
        </s.ViewMore>
      )}
      {isDDayLoading ? (
        <CenterSpinner>Loading...</CenterSpinner>
      ) : filteredDdayList.length === 0 ? (
        <s.NoDdayDescription icon={'book_check'} descriptions={['등록된 D-DAY가 없어요.']} />
      ) : (
        <s.DdayList>
          {filteredDdayList?.map((dday, index) => (
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
        </s.DdayList>
      )}
      {children}
    </s.Root>
  )
}
