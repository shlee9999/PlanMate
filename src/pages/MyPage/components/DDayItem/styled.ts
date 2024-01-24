import styled, { css } from 'styled-components'
import { PinIcon } from 'assets/SvgComponents'
import { FlexRow } from 'commonStyled'
export const Root = styled.div<{ $isSelected: boolean; $selectable: boolean }>`
  position: relative;
  height: 48px;
  padding: 15px 63px 15px 30px;
  background-color: ${(props) => props.theme.background.gray2};
  border-radius: 8px;
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
  white-space: nowrap;
`
export const Container = styled(FlexRow)`
  max-width: 600px;
`
export const Title = styled.p`
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
  width: 75px;
`
export const DDay = styled.p`
  position: absolute;
  &::before {
    content: 'D - ';
  }
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  color: ${(props) => props.theme.text.black2};
`
export const StyledPinIcon = styled(PinIcon)`
  position: absolute;
  cursor: pointer;
  left: 8px;
`
