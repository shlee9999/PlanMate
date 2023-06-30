import styled from 'styled-components'
import 'globals.css'
import startButton from 'assets/images/start_button.png'
import pauseButton from 'assets/images/pause_button.png'
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
  background-image: url('/assets/ellipsis.png');
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
  border: 1px solid #1db951;
`

export const StartButton = styled(CircleButton)`
  background: url(${startButton}) no-repeat 0 0;
  background-size: 21px 21px;
  background-position: center;
`

export const PauseButton = styled(CircleButton)`
  background: url(${pauseButton}) no-repeat 50% 0;
  background-size: 21px 21px;
  background-position: center;
  background-color: #1db951;
`

export const SubjectTitle = styled.p`
  font-size: 1.2rem;
`

export const Time = styled.p`
  font-size: 1.2rem;
`
