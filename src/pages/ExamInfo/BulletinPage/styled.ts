import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 48px 160px 102px;
  row-gap: 24px;
`
export const WriteTypo = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`
export const CancelButton = styled.button``
export const RegisterButton = styled.button``

export const TitleInput = styled.input`
  box-sizing: border-box;
  padding: 11px 16px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  width: 850px;
  height: 48px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  &::placeholder {
    color: #c6c6c6;
  }
`
export const ContentInput = styled.textarea`
  outline: none;
  box-sizing: border-box;
  padding: 11px 16px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  width: 1120px;
  height: 535px;
`
