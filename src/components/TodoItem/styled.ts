import styled from 'styled-components'
import ellipsisButton from 'assets/images/ellipsis.png'
import timerStartButton from 'assets/images/timer_start_button.png'
import timerPauseButton from 'assets/images/timer_pause_button.png'
import { TODOITEM_MAX_WIDTH, TODOITEM_MIN_WIDTH } from 'constants/layout'

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
export const EllipsisButton = styled.button`
  width: 48px;
  height: 48px;
  background: url(${ellipsisButton}) no-repeat 50% 50%;
  background-size: 48px 48px;
  border: none;
  cursor: pointer;
`

export const CircleButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  width: 46px;
  height: 46px;
`

export const StartButton = styled(CircleButton)`
  background: url(${timerStartButton}) no-repeat 60% 50%;
  background-size: 21px 21px;
  background-color: ${(props) => props.color};
`

export const PauseButton = styled(CircleButton)`
  background: url(${timerPauseButton}) no-repeat 50% 50%;
  background-size: 15px 21px;
  background-color: ${(props) => props.color};
`

export const SubjectTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
`

export const Time = styled.p`
  font-size: 36px;
  font-weight: 500;
`

export const RunningTime = styled(Time)`
  color: ${(props) => props.color};
`
