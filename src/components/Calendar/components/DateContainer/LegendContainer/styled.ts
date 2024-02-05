import { P10 } from 'commonStyled'
import styled from 'styled-components'

export const LegendContainer = styled.ul`
  display: flex;
  align-self: flex-end;
  @media screen and (${(props) => props.theme.medium}) {
    display: none;
  }
`
export const Legend = styled.legend`
  display: flex;
  align-items: center;
  gap: 2px;
  ${P10}
  margin-right: 8px;
  &:first-child > div {
    border: 1px solid ${(props) => props.theme.background.gray3};
  }
  &:nth-child(2) > div {
    background-color: ${(props) => props.theme.primary.default};
    opacity: 0.1;
  }
  &:nth-child(3) > div {
    background-color: ${(props) => props.theme.primary.default};
    opacity: 0.6;
  }
  &:nth-child(4) > div {
    background-color: ${(props) => props.theme.primary.default};
  }
  color: ${(props) => props.theme.text.gray2};
`
export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
`
