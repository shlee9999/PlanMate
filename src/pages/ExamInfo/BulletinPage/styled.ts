import styled from 'styled-components'
import cancelImg from 'assets/images/cancel.png'
import greenCheckImg from 'assets/images/check_green.png'
import whiteCheckImg from 'assets/images/check_white.png'

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
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 8px;
`
export const CancelButton = styled.button`
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid #dddede;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CancelImg = styled.img`
  content: url(${cancelImg});
  width: 11px;
  height: 11px;
  margin-right: 5px;
`
export const CheckImg = styled.img`
  content: url(${greenCheckImg});
  width: 9px;
  height: 7px;
  margin-right: 3px;
`
export const RegisterButton = styled.button`
  width: 96px;
  height: 32px;
  top: 801px;
  left: 1184px;
  border-radius: 100px;
  border: 1px solid #01cb45;
  color: #01cb45;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${CheckImg} {
      content: url(${whiteCheckImg});
    }
    color: white;
    background-color: #1db951;
  }
`

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
