import styled from 'styled-components'
import { DownArrow, PageRoot } from 'commonStyled'
import { ActionButton } from 'components/ActionButton/ActionButton'

export const Root = styled(PageRoot)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 24px;
  .editor {
    outline: none;
    box-sizing: border-box;
    padding: 0 14px;
    border: 1px solid ${(props) => props.theme.border.dark};
    border-radius: 8px;
    max-width: 1120px;
    min-height: 200px;
  }
`
export const WriteTypo = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 4px;
`
export const SuggestTypo = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`
export const GreenTypo = styled.span`
  color: ${(props) => props.theme.primary.default};
  font-size: 12px;
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
  box-sizing: border-box;
  padding: 11px 16px;
  border: 1px solid ${(props) => props.theme.border.dark};
  border-radius: 8px;
  width: 100%;
  height: 48px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
`
export const ContentInput = styled.textarea`
  outline: none;
  box-sizing: border-box;
  padding: 18px 16px;
  border: 1px solid ${(props) => props.theme.text.gray3};
  border-radius: 8px;
  width: 1120px;
  height: 535px;
`

export const SuggestInput = styled.textarea`
  outline: none;
  box-sizing: border-box;
  padding: 14px;
  border: 1px solid ${(props) => props.theme.text.gray3};
  border-radius: 8px;
  max-width: 1120px;
  min-width: 528px;
  min-height: 500px;
  height: auto;
  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.theme.text.black2};
`
export const RegisterButton = styled(ActionButton)``
