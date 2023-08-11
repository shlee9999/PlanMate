import { HEADER_HEIGHT, HEADER_MAX_WIDTH, HEADER_MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'
import yellowCircle from 'assets/images/yellow_circle.png'
export const Root = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  width: 100vw;
  box-shadow: 0px 4px 8px 0px #00000014;
  height: ${HEADER_HEIGHT};
  background-color: white;
  z-index: 1;
`
export const ContentWrapper = styled.div`
  max-width: ${HEADER_MAX_WIDTH}px;
  min-width: ${HEADER_MIN_WIDTH}px;
  display: flex;
  justify-content: space-between;
  padding: 17px 160px 16px 160px;
  margin: 0 auto;
  box-sizing: border-box;
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 30px;
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
export const LoginTypo = styled.p`
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

export const PageList = styled.div`
  display: flex;
  column-gap: 16px;
  cursor: pointer;
`

export const PageItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0;
`

export const SelectedPageItem = styled.p`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0;
  color: #01cb45;
  &::after {
    content: '';
    background: url(${yellowCircle}) no-repeat 0 0;
    width: 6px;
    height: 6px;
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
  }
`
