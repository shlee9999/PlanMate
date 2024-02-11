import { H14_500 } from 'commonStyled'
import styled from 'styled-components'

export const TagButton = styled.button`
  ${H14_500}
  flex-basis: 100px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.gray1};

  &.isSelected {
    border: 1px solid ${(props) => props.theme.primary.default};
    color: ${(props) => props.theme.primary.default};
    background-color: ${(props) => props.theme.primary.light};
  }
`

export const TagContainer = styled.div`
  width: 100%;
  min-width: 230px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:first-child {
    margin-top: 20px;
    margin-bottom: 8px;
  }
  &:last-child {
    margin-bottom: 32px;
  }
`
