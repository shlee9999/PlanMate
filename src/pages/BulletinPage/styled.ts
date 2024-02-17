import styled from 'styled-components'
import { FlexRow, H16_500, H16_700, H21_700, P12, P14, PageRoot } from 'commonStyled'
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
export const UpperContainer = styled.div`
  height: 48px;
  display: flex;
  @media screen and (${(props) => props.theme.small}) {
    flex-direction: column;
  }
`

export const CancelButton = styled(ActionButton)``
export const TitleInputContainer = styled(FlexRow)`
  flex-grow: 1;
  background-color: tomato;
`
export const TitleTypo = styled.p`
  ${H16_500}
  white-space: nowrap;
  margin-right: 24px;
`
export const TitleInput = styled.input`
  flex-grow: 1;
  ${H21_700}
  padding: 11px 16px;
  border: 1px solid ${(props) => props.theme.border.dark};
  border-radius: 8px;
  height: 100%;
  margin-right: 24px;
  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
  @media screen and (${(props) => props.theme.medium}) {
    ${H16_700}
  }
  @media screen and (${(props) => props.theme.small}) {
    flex: 0 0 0;
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
