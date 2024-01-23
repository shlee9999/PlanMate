import styled from 'styled-components'

export const Root = styled.button<{ $color: string }>`
  -webkit-user-select: none;
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

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
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`
export const CloseButton = styled.button`
  -webkit-user-select: none;
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
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
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.black2};
`
