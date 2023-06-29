import { HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 17px 160px 16px 160px;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 8px 0px #00000014;
`
export const TimerWidgetWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`

export const RightContainer = styled.div`
  display: flex;
  column-gap: 18px;
  align-items: center;
  width: fit-content;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.5px;
`
export const GreetTypo = styled.p`
  cursor: pointer;
`
export const GreenTypo = styled.span`
  color: #01cb45;
  text-decoration: underline;
`
export const Logout = styled.p`
  cursor: pointer;
`
export const Notice = styled.p`
  cursor: pointer;
`

export const Logo = styled.img`
  width: 104px;
  height: 31px;
  margin-right: 56px;
`

export const Tab = styled.div`
  display: flex;
  column-gap: 16px;
  cursor: pointer;
`
