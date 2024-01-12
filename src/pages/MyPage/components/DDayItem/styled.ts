import styled from 'styled-components'
import { PinIcon } from 'assets/SvgComponents'
export const Root = styled.div`
  min-width: fit-content;
  position: relative;
  height: 48px;
  box-sizing: border-box;
  padding: 15px 16px 15px 8px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.background.gray2};
  border-radius: 8px;
  white-space: nowrap;
  &.isFixed {
    background-color: ${(props) => props.theme.primary.light};
    order: -1;
  }
`
export const LeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`
export const Title = styled.p`
  max-width: 180px;
  margin-right: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.text.black2};
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Date = styled.p`
  color: ${(props) => props.theme.text.gray1};
  font-size: 10px;
  font-weight: 400;
`
export const DDay = styled.p`
  &::before {
    content: 'D - ';
  }
  right: 16px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  color: ${(props) => props.theme.text.black2};
`
export const StyledPinIcon = styled(PinIcon)`
  cursor: pointer;
`
