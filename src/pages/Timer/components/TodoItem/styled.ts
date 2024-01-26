import styled from 'styled-components'
import { Ellipsis, TimerPause, TimerStart } from 'assets/SvgComponents'
import { H36_500, H36_700 } from 'commonStyled'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
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
  ${H36_700}
  max-width: 380px; //* 10글자 들어감
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Time = styled.p`
  ${H36_500}
`

export const RunningTime = styled(Time)`
  color: ${(props) => props.color};
`
