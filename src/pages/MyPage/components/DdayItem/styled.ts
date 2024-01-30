import styled, { css } from 'styled-components'
import { PinIcon } from 'assets/SvgComponents'
import { FlexRow, H14_500, H21_700, P10 } from 'commonStyled'
export const DdayItem = styled.div<{ $isSelected: boolean; $selectable: boolean }>`
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
  ${H14_500}
  margin-right: 2px;
  color: ${(props) => props.theme.text.black2};
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Date = styled.p`
  ${P10}
  color: ${(props) => props.theme.text.gray1};
  width: 75px;
`
export const RemainingDays = styled.p`
  ${H21_700}
  position: absolute;
  &::before {
    content: 'D - ';
  }
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  color: ${(props) => props.theme.text.black2};
`
export const StyledPinIcon = styled(PinIcon)<{ $isFixed: boolean }>`
  position: absolute;
  left: 8px;
  fill: ${(props) => props.$isFixed && props.theme.primary.default};
  &:hover {
    fill: ${(props) => props.theme.primary.default};
  }
`
