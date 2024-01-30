import { Dispatch, SetStateAction, useEffect } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'

type useClickDdayItemProps = {
  setSelectedDDayId: (scheduleId: number) => void
  setSelectedDate: (date: DateProps) => void
  setDdayName: (name: string) => void
  setSelectedIndex: Dispatch<SetStateAction<number>>
  selectedIndex: number
  setIsEditing: (state: boolean) => void
  isEditing: boolean
}

export const useClickDdayItem = ({
  setDdayName,
  setSelectedDDayId,
  setSelectedDate,
  setSelectedIndex,
  setIsEditing,
  selectedIndex,
  isEditing,
}: useClickDdayItemProps) => {
  const onClickDdayItem =
    (index: number, targetDate: string, eventName: string, scheduleId: number) => (e: React.MouseEvent) => {
      e.stopPropagation()
      setSelectedDDayId && setSelectedDDayId(scheduleId)
      setSelectedDate && setSelectedDate(dateUtils.getDateProps(targetDate))
      setDdayName && setDdayName(eventName)
      setSelectedIndex((prev) => (prev === index ? -1 : index))
    }
  useEffect(() => {
    setIsEditing && setIsEditing(selectedIndex === -1 ? false : true)
    selectedIndex === -1 && setDdayName && setDdayName('')
  }, [selectedIndex])

  useEffect(() => {
    !isEditing && setSelectedIndex(-1)
  }, [isEditing])
  return { onClickDdayItem }
}
