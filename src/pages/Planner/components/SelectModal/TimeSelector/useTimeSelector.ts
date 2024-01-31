import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { timeUtils } from 'utils'

type useTimeSelectorProps = {
  set: string
}

export const useTimeSelector = ({ set }: useTimeSelectorProps) => {
  const dispatch = useDispatch()
  const { startAt, endAt, scheduleName, colorHex, plannerId, day } = useSelector(
    (state: RootState) => state.selectedInfo
  )
  const value = set === '부터' ? startAt.slice(0, 2) : endAt.slice(0, 2) === '00' ? 24 : endAt.slice(0, 2)
  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (set === '부터')
      dispatch(
        updateInfo({
          endAt: endAt,
          scheduleName: scheduleName,
          colorHex,
          plannerId,
          startAt: timeUtils.getFormattedTime(+e.target.value * 60 * 60),
          day,
        })
      )
    else
      dispatch(
        updateInfo({
          startAt: startAt,
          endAt: timeUtils.getFormattedTime(+e.target.value * 60 * 60),
          scheduleName: scheduleName,
          colorHex,
          plannerId,
          day,
        })
      )
  }
  return { handleHourChange, value }
}
