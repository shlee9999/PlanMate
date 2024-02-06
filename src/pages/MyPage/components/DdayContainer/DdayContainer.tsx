import * as s from './styled'
import { FC, ReactNode, useState } from 'react'
import { DDayEntityType } from 'api/types/ScheduleType'
import { dateUtils } from 'utils'
import { CenterSpinner } from 'commonStyled'
import { useClickDdayItem } from './hooks/useClickDdayItem'

type DdayContainerProps = {
  className?: string
  dDayList: DDayEntityType[]
  setDdayName?: (name: string) => void
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
  setDdayName,
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
  const filteredDdayList = dDayList.filter((dDay) => dateUtils.isTodayOrFuture(dateUtils.getDateProps(dDay.targetDate)))
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const { onClickDdayItem } = useClickDdayItem({
    setDdayName,
    setSelectedDDayId,
    setSelectedIndex,
    setIsEditing,
    selectedIndex,
    isEditing,
    selectable,
  })

  return (
    <s.DdayContainer className={className} title={title} description={description}>
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
              remainingDays={dday.remainingDays}
              isSelected={selectedIndex === index}
              onClick={onClickDdayItem(index, dday.targetDate, dday.title, dday.dDayId)}
              selectable={selectable}
            />
          ))}
        </s.DdayList>
      )}
      {children}
    </s.DdayContainer>
  )
}
