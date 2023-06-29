import { HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 17px 160px 16px 160px;
  width: 100%;
  height: ${HEADER_HEIGHT};
`
export const TimerWidgetWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
`

export const Logo = styled.img`
  width: 104px;
  height: 31px;
`
