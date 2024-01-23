import styled, { css } from 'styled-components'
import { CloseIcon, PinIcon } from 'assets/SvgComponents'
import { DDAYITEM_MIN_WIDTH } from 'constants/layout'
export const Root = styled.div<{ $isSelected: boolean; $selectable: boolean }>`
  min-width: ${DDAYITEM_MIN_WIDTH};
  position: relative;
  height: 48px;
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
  ${(props) =>
    props.$selectable &&
    css`
      cursor: pointer;
      &:hover {
        outline: 2px solid ${(props) => props.theme.primary.default};
      }
      ${props.$isSelected &&
      css`
        outline: 2px solid ${(props) => props.theme.primary.default};
      `}
    `}
`
export const LeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`
export const Title = styled.p`
  max-width: 150px;
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
