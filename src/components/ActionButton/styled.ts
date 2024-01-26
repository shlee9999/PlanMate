import { BLOCK_SELECT } from 'constants/blockSelect'
import styled from 'styled-components'

export const Root = styled.button<{ $color: string }>`
  //! H14_500 불러오면 에러가 남.
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.$color};
  color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.background.white};
    background-color: ${(props) => props.$color};
  }
`
export const CloseButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  ${BLOCK_SELECT}
  width: 96px;
  height: 32px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.background.white};
    background-color: ${(props) => props.theme.primary.dark};
  }
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.black2};
`
