import { P14 } from 'commonStyled'
import styled from 'styled-components'

export const AddSubjectButton = styled.div`
  ${P14}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 5px;
  width: 64px;
  height: 32px;
  color: ${(props) => props.theme.text.gray1};
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.background.gray3};
`
