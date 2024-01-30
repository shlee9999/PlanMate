import styled from 'styled-components'
import { H21_700, P12, P14, PageRoot } from 'commonStyled'
import { ActionButton } from 'components/ActionButton/ActionButton'

export const BulletinPage = styled(PageRoot)``
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  .editor {
    outline: none;
    padding: 0 14px;
    border: 1px solid ${(props) => props.theme.border.dark};
    border-radius: 8px;
    min-height: 200px;
    line-height: 1.2;
  }
`
export const WriteTypo = styled.div`
  ${H21_700}
  margin-bottom: 4px;
`
export const SuggestTypo = styled.div`
  ${P12}
`
export const GreenTypo = styled.span`
  ${P12}
  color: ${(props) => props.theme.primary.default};
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 8px;
`
export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CancelButton = styled(ActionButton)``

export const TitleInput = styled.input`
  ${H21_700}
  padding: 11px 16px;
  border: 1px solid ${(props) => props.theme.border.dark};
  border-radius: 8px;
  width: 100%;
  height: 48px;
  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
`
export const ContentInput = styled.textarea`
  outline: none;
  padding: 18px 16px;
  border: 1px solid ${(props) => props.theme.text.gray3};
  border-radius: 8px;
  width: 1120px;
  height: 535px;
`

export const SuggestInput = styled.textarea`
  ${P14}
  outline: none;
  padding: 14px;
  border: 1px solid ${(props) => props.theme.text.gray3};
  border-radius: 8px;
  min-height: 500px;
  height: auto;
  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
  color: ${(props) => props.theme.text.black2};
`
export const RegisterButton = styled(ActionButton)`
  order: 1;
`
