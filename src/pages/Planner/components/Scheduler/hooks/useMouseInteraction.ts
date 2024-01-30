import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'
import { Dispatch, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { timeUtils, dateUtils } from 'utils'

type useMouseInteractionProps = {
  selectedCells: string[]
  setSelectedCells: Dispatch<SetStateAction<string[]>>
  openModal: () => void
}

export const useMouseInteraction = ({ selectedCells, setSelectedCells, openModal }: useMouseInteractionProps) => {
  const dispatch = useDispatch()
  const { scheduleName: text, colorHex: bgColor } = useSelector((state: RootState) => state.selectedInfo)
  const onMouseUp = () => {
    if (selectedCells.length === 0) return
    const startTime = +selectedCells[0].split('T')[1] * 60 * 60
    const endTime = (+selectedCells[selectedCells.length - 1].split('T')[1] + 1) * 60 * 60
    const { smaller, larger } = timeUtils.compareTime(startTime, endTime)
    const startHour = timeUtils.getFormattedTime(smaller)
    const endHour = timeUtils.getFormattedTime(larger)
    const year = +selectedCells[0].slice(0, 4)
    const month = +selectedCells[0].slice(5, 7)
    const date = +selectedCells[0].slice(8, 10)
    dispatch(
      updateInfo({
        startAt: startHour,
        endAt: endHour,
        scheduleName: text,
        colorHex: bgColor,
        plannerId: new Date().getTime(), // tempId
        day: dateUtils.getYYYYMMDD({
          year,
          month,
          date,
        }), // YYYY-MM-DD
      })
    )
    openModal()
  }
  const onMouseEnter = (date, hour) => (e) => {
    if (e.buttons !== 1) return
    if (
      (selectedCells.includes(dateUtils.getYYYYMMDD(date) + 'T' + `${hour - 1}`) &&
        !selectedCells.includes(dateUtils.getYYYYMMDD(date) + 'T' + `${hour + 1}`)) ||
      (selectedCells.includes(dateUtils.getYYYYMMDD(date) + 'T' + `${hour + 1}`) &&
        !selectedCells.includes(dateUtils.getYYYYMMDD(date) + 'T' + `${hour - 1}`))
    )
      setSelectedCells((prev) => prev.concat(dateUtils.getYYYYMMDD(date) + 'T' + hour))
    else setSelectedCells([])
  }

  const onMouseDown = (date, hour) => () => setSelectedCells([dateUtils.getYYYYMMDD(date) + 'T' + hour])
  return { onMouseDown, onMouseEnter, onMouseUp }
}
