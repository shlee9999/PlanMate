import styled from 'styled-components'
import ellipsisButton from 'assets/images/ellipsis.svg'
import timerStartButton from 'assets/images/timer_start.svg'
import timerPauseButton from 'assets/images/timer_pause.svg'
import { TODOITEM_MAX_WIDTH, TODOITEM_MIN_WIDTH } from 'constants/layout'
import { Ellipsis, TimerPause, TimerStart } from 'assets/SvgComponents'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
  max-width: ${TODOITEM_MAX_WIDTH}px;
  min-width: ${TODOITEM_MIN_WIDTH}px;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`
export const RightWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 16px;
`
export const EllipsisButton = styled(Ellipsis)`
  cursor: pointer;
`

export const CircleButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  width: 46px;
  height: 46px;
`

export const StartButton = styled(TimerStart)`
  cursor: pointer;
`

export const PauseButton = styled(TimerPause)`
  cursor: pointer;
`

export const SubjectTitle = styled.p`
  max-width: 380px; //* 10글자 들어감
  font-size: 36px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Time = styled.p`
  font-size: 36px;
  font-weight: 500;
`

export const RunningTime = styled(Time)`
  color: ${(props) => props.color};
`
