import styled from 'styled-components'
import { EllipsisIcon, TimerPause, TimerStart } from 'assets/SvgComponents'
import { FlexRow, H21_700, H24_500, H28_700, H36_500, H36_700 } from 'commonStyled'
import { LARGE_SIDE_MARGIN, MEDIUM_SIDE_MARGIN } from 'constants/layout'
import { TITLE_MAX_WIDTH, TIMER_BUTTON_SIZE } from 'constants/timerItem'

export const Root = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 29px;
`

export const LeftWrapper = styled(FlexRow)``
export const RightWrapper = styled(FlexRow)`
  justify-content: space-between;
  @media screen and (${(props) => props.theme.xlarge}) {
    width: ${TITLE_MAX_WIDTH.XLARGE}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    width: ${TITLE_MAX_WIDTH.LARGE}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: ${TITLE_MAX_WIDTH.MEDIUM}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    width: ${TITLE_MAX_WIDTH.SMALL}px;
  }
`
export const EllipsisButton = styled(EllipsisIcon)`
  width: 48px;
  cursor: pointer;
  @media screen and (${(props) => props.theme.xlarge}) {
    width: 48px;
  }
  @media screen and (${(props) => props.theme.large}) {
    width: 48px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: 35px;
  }
  @media screen and (${(props) => props.theme.small}) {
    width: 30px;
  }
`

export const StartButton = styled(TimerStart)`
  cursor: pointer;
  @media screen and (${(props) => props.theme.xlarge}) {
    width: ${TIMER_BUTTON_SIZE.XLARGE}px;
    margin-right: 24px;
  }
  @media screen and (${(props) => props.theme.large}) {
    width: ${TIMER_BUTTON_SIZE.LARGE}px;
    margin-right: ${LARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: ${TIMER_BUTTON_SIZE.MEDIUM}px;
    margin-right: ${MEDIUM_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    width: ${TIMER_BUTTON_SIZE.SMALL}px;
    margin: 0 5px;
  }
`

export const PauseButton = styled(TimerPause)`
  cursor: pointer;
  @media screen and (${(props) => props.theme.xlarge}) {
    width: ${TIMER_BUTTON_SIZE.XLARGE}px;
    margin-right: 24px;
  }
  @media screen and (${(props) => props.theme.large}) {
    width: ${TIMER_BUTTON_SIZE.LARGE}px;
    margin-right: ${LARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: ${TIMER_BUTTON_SIZE.MEDIUM}px;
    margin-right: ${MEDIUM_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    width: ${TIMER_BUTTON_SIZE.SMALL}px;
    margin: 0 5px;
  }
`

export const SubjectTitle = styled.p`
  @media screen and (${(props) => props.theme.xlarge}) {
    ${H36_700}
    width: 380px; //* 10글자 들어감
  }
  @media screen and (${(props) => props.theme.large}) {
    ${H36_700}
    width: 380px; //* 10글자 들어감
  }
  @media screen and (${(props) => props.theme.medium}) {
    ${H28_700}
    width: 200px; //* 10글자 들어감
  }
  @media screen and (${(props) => props.theme.small}) {
    ${H21_700}
    width: 105px; //* 5글자 들어감
  }
  ${H36_700}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Time = styled.p`
  @media screen and (${(props) => props.theme.xlarge}) {
    ${H36_500}
  }
  @media screen and (${(props) => props.theme.large}) {
    ${H36_500}
  }
  @media screen and (${(props) => props.theme.medium}) {
    ${H24_500}
  }
  @media screen and (${(props) => props.theme.small}) {
    ${H24_500}
  }
`

export const RunningTime = styled(Time)`
  color: ${(props) => props.color};
`
