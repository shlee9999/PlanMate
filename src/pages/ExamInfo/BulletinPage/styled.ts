import styled from 'styled-components'
import cancelImg from 'assets/images/cancel.png'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 48px 160px 102px;
  row-gap: 24px;
  .editor {
    outline: none;
    box-sizing: border-box;
    padding: 0 14px;
    border: 1px solid #c6c6c6;
    border-radius: 8px;
    width: 1120px;
    min-height: 200px;
  }
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
export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`
export const TagSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 48px;
  column-gap: 8px;
`
export const TagTypo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 48px;
`
export const TagSelector = styled.button`
  position: relative;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 209px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #c6c6c6;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #888888;
  text-align: left;
`
export const DownArrowImg = styled.img`
  position: absolute;
  width: 6.2px;
  height: 10.5px;
  top: 50%;
  right: 13px;
  transform: rotate(-90deg) translate(50%);
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
  padding: 18px 16px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  width: 1120px;
  height: 535px;
`
