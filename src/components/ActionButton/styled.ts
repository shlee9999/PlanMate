import { BLOCK_SELECT } from 'constants/blockSelect'
import styled from 'styled-components'
import { H14_500 } from 'commonStyled'

export const ActionButton = styled.button<{ $color: string }>`
  //! H14_500 불러오면 에러가 남.
  ${H14_500}
  ${BLOCK_SELECT}
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
  ${H14_500}
  ${BLOCK_SELECT}
  width: 96px;
  height: 32px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    /* color: ${(props) => props.theme.background.white}; */
    background-color: ${(props) => props.theme.border.default};
    border: 1px solid ${(props) => props.theme.border.dark};
  }
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.black2};
`
