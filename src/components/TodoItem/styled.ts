import styled from 'styled-components'
import ellipsisButton from 'assets/images/ellipsis.png'
import timerStartButton from 'assets/images/timer_start_button.png'
import timerPauseButton from 'assets/images/timer_pause_button.png'
export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const RightWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`
export const EllipsisButton = styled.button`
  width: 50px;
  height: 20px;
  background-image: url(${ellipsisButton});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;

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
  font-size: 1.2rem;
`

export const Time = styled.p`
  font-size: 1.2rem;
`

export const RunningTime = styled(Time)`
  color: #01cb45;
`
