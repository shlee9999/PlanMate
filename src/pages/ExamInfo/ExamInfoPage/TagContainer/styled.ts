import { TagRoot } from 'commonStyled'
import { Display } from 'components/Display/Display'
import { TagSelector } from 'pages/ExamInfo/components'
import styled from 'styled-components'

export const Tag = styled(TagRoot)``
export const TagButton = styled.button`
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

export const TagButtonContainer = styled.div`
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

export const DTagContainer = styled(Display)`
  width: 100%;
`
export const TTagContainer = styled(Display)``
export const MTagContainer = styled(Display)`
  position: absolute;
  top: -40px;
  right: 0;
`
