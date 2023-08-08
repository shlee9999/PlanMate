import { useEffect } from 'react'
import { Mode, Root, Timer } from './styled'
import { useSelector } from 'react-redux'
import { useFormattedTime } from 'utils/helper'
import { useTimer } from 'hooks/useTimer'
import { RootState } from 'modules'

export const StudyTimerWidget = () => {
  const totalTime = useSelector((state: RootState) => state.timer.totalTime)
  const formattedTime: string = useFormattedTime(totalTime)
  return (
    <Root>
      <Mode>공부</Mode>
      <Timer>{formattedTime}</Timer>
    </Root>
  )
}
