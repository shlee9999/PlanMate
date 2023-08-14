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
  color: #01cb45;
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
export const TagSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  z-index: 100;
  margin-left: 24px;
`
export const TagTypo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 48px;
  white-space: nowrap;
`
export const TagSelector = styled.div`
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
`
export const TagOptionWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  box-sizing: border-box;
  padding: 6px 12px 6px 6px;
  width: 209px;
  height: 102px;
  border-radius: 8px;
  border: 1px solid #dddede;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  z-index: 2;
`
export const TagOption = styled.button`
  width: 191px;
  height: 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: #888888;

  &:hover {
    border-radius: 5px;
    background-color: #e2f9e9;
    color: #01cb45;
  }

  &::before {
    content: '# ';
  }
`
export const DownArrowImg = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 13px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
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
  width: 100%;
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

export const SuggestInput = styled.textarea`
  outline: none;
  box-sizing: border-box;
  padding: 14px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  max-width: 1120px;
  min-width: 528px;
  min-height: 500px;
  height: auto;
  &::placeholder {
    color: #c6c6c6;
  }
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #444444;
`
