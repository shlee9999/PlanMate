import styled from 'styled-components'
import ellipsisButton from 'assets/images/ellipsis.png'
import { RegisterButton } from 'styled'

export const EllipsisButton = styled.img`
  position: relative;
  cursor: pointer;
`
export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #c6c6c6;
  &:hover {
    ${EllipsisButton} {
      content: url(${ellipsisButton});
      transform: rotate(90deg);
      position: absolute;
      right: 3px;
      top: 12px;
      width: 16px;
    }
  }
`
export const UpperTypoWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: end;
  column-gap: 4px;
`
export const LeftContainer = styled.div`
  padding: 16px 0 14px 0;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const CommentOwnerNickname = styled.p``

export const Date = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  color: #888888;
  margin-bottom: 1px;
`
export const Comment = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #222222;
  white-space: pre-line;
`
export const EditInput = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #222222;
  resize: none;
`
export const ReplyButton = styled.button`
  width: 48px;
  height: 28px;
  border-radius: 28px;
  border: 1px solid #c6c6c6;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #666666;
`

export const LikeImg = styled.img`
  width: 13px;
  height: 12px;
  margin-right: 2px;
`

export const LikeButton = styled.button`
  margin: 15px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #666666;
`
export const EllipsisModal = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
  transform: translate(0, 16px);
  width: 74px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddede;
  border-radius: 8px;
  background-color: white;
  z-index: 1;
  box-sizing: border-box;
  padding: 6px 5px;
`
const EllipsisButtonRoot = styled.button`
  width: 64px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    background-color: #e2f9e9;
    color: #01cb45;
  }
  text-align: left;
  box-sizing: border-box;
  padding-left: 6px;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #888888;
`
export const EllipsisEditButton = styled(EllipsisButtonRoot)``
export const EllipsisDeleteButton = styled(EllipsisButtonRoot)``

export const AuthorIcon = styled.div`
  width: 40px;
  height: 14px;
  line-height: 14px;
  border-radius: 100px;
  border: 1px solid #01cb45;
  background-color: #e2f9ea;
  color: #01cb45;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
`
export const ReplyInputWrapper = styled.div`
  padding-bottom: 10px;
  position: relative;
  display: flex;
  border-bottom: 1px solid #c6c6c6;
`
export const ReplyRightWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const ReplyMark = styled.div`
  margin-top: 10px;
  margin-left: 24px;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border-left: 1px solid #666666;
  border-bottom: 1px solid #666666;
`
export const ReplyInput = styled.textarea`
  box-sizing: border-box;
  padding: 9px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #c6c6c6;
  background-color: #f9f9f9;
  resize: none;
  &::placeholder {
    color: #c6c6c6;
  }
`
export const ReplyRegisterButton = styled(RegisterButton)`
  align-self: flex-end;
`
export const UserNickname = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #222222;
`
