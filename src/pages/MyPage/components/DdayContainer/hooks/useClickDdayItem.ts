import { updateSelectedDate } from 'modules/selectedDate'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dateUtils } from 'utils'

type useClickDdayItemProps = {
  setSelectedDDayId: (scheduleId: number) => void
  setDdayName: (name: string) => void
  setSelectedIndex: Dispatch<SetStateAction<number>>
  selectedIndex: number
  setIsEditing: (state: boolean) => void
  isEditing: boolean
  selectable: boolean
}

export const useClickDdayItem = ({
  setDdayName,
  setSelectedDDayId,
  setSelectedIndex,
  setIsEditing,
  selectedIndex,
  isEditing,
  selectable,
}: useClickDdayItemProps) => {
  if (!selectable) return
  const dispatch = useDispatch()
  const onClickDdayItem =
    (index: number, targetDate: string, eventName: string, scheduleId: number) => (e: React.MouseEvent) => {
      e.stopPropagation()
      setSelectedDDayId(scheduleId)
      setDdayName(eventName)
      setSelectedIndex((prev) => (prev === index ? -1 : index))
      dispatch(updateSelectedDate(dateUtils.getDateProps(targetDate)))
    }
  useEffect(() => {
    setIsEditing(selectedIndex === -1 ? false : true)
    if (selectedIndex === -1) {
      setDdayName('')
      dispatch(updateSelectedDate(dateUtils.getTodayDateProps()))
    }
  }, [selectedIndex])

  useEffect(() => {
    !isEditing && setSelectedIndex(-1)
  }, [isEditing])
  return { onClickDdayItem }
}
