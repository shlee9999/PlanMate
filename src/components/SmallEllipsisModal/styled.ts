import { P14 } from 'commonStyled'
import { HIDE_SCROLLBAR } from 'constants/hideScrollbar'
import styled from 'styled-components'

export const SmallEllipsisModal = styled.div`
  ${HIDE_SCROLLBAR}
  position: absolute;
  top: 16px;
  right: 0;
  transform: translate(0, 16px);
  width: 74px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border.default};
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.white};
  z-index: 1;
  padding: 6px 5px;
  overflow: scroll;
`
export const SmallEllipsisButton = styled.button<{ $buttonTextAlign: 'left' | 'center' }>`
  ${P14}
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.primary.light};
    color: ${(props) => props.theme.primary.default};
  }
  text-align: ${(props) => props.$buttonTextAlign};
  padding-left: 6px;

  color: ${(props) => props.theme.text.gray2};
`
