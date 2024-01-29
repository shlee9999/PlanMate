import styled from 'styled-components'
import ellipsisButton from 'assets/images/ellipsis.svg'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { HIDE_SCROLLBAR } from 'constants/hideScrollbar'
import { H14_500, H14_700, P10, P12, P14 } from 'commonStyled'
import { EllipsisIcon } from 'assets/SvgComponents'

export const EllipsisButton = styled(EllipsisIcon)`
  transform: rotate(90deg);
  position: absolute;
  cursor: pointer;
  z-index: 1;
  right: 0;
  top: 0;
  width: 16px;
  opacity: 0;
`
export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border.dark};
  &:hover {
    ${EllipsisButton} {
      position: absolute;
      right: 3px;
      top: 0;
      opacity: 1;
    }
  }
`
export const UpperTypoWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: end;
  column-gap: 4px;
`
export const CommentEditForm = styled.form`
  width: 100%;
  padding: 16px 0 14px 0;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: relative;
`
export const EditCompleteButton = styled(ActionButton)`
  position: absolute;
  right: 0px;
  top: 8px;
`
export const CommentOwnerNickname = styled.p``

export const Date = styled.p`
  ${P10}
  color: ${(props) => props.theme.text.gray2};
  margin-bottom: 1px;
`
export const Comment = styled.p`
  ${HIDE_SCROLLBAR}
  ${P14}
  width: 100%;
  color: ${(props) => props.theme.text.black1};
  white-space: pre-line;
  &.mypage_comment {
    cursor: pointer;
  }
  word-break: keep-all;
  word-wrap: break-word;
  min-height: 30px;
  max-height: 150px;
  overflow-y: scroll;
`
export const CommentEditInput = styled.textarea`
  ${P14}
  color: ${(props) => props.theme.text.black1};
  resize: none;
`
export const ReplyButton = styled.button`
  ${P14}
  width: fit-content;
  height: 28px;
  border-radius: 28px;
  border: 1px solid ${(props) => props.theme.border.dark};
  color: ${(props) => props.theme.text.gray1};
  padding: 5px 11px;
  box-sizing: border-box;
`

export const LikeButton = styled.button`
  ${P12}
  margin: 15px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${(props) => props.theme.text.gray1};
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
  border: 1px solid ${(props) => props.theme.border.default};
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.white};
  z-index: 1;
  box-sizing: border-box;
  padding: 6px 5px;
`
const EllipsisButtonRoot = styled.button`
  ${P14}
  width: 64px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.primary.light};
    color: ${(props) => props.theme.primary.default};
  }
  text-align: left;
  box-sizing: border-box;
  padding-left: 6px;

  color: ${(props) => props.theme.text.gray2};
`
export const EllipsisEditButton = styled(EllipsisButtonRoot)``
export const EllipsisDeleteButton = styled(EllipsisButtonRoot)``

export const AuthorIcon = styled.div`
  ${P10}
  width: 40px;
  height: 14px;
  line-height: 14px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary.default};
  background-color: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.primary.default};
  text-align: center;
`
export const ReplyInputWrapper = styled.div`
  padding-bottom: 10px;
  position: relative;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border.dark};
`
export const ReplyForm = styled.form`
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
  border-left: 1px solid ${(props) => props.theme.text.gray1};
  border-bottom: 1px solid ${(props) => props.theme.text.gray1};
`
export const ReplyInput = styled.textarea`
  ${H14_500}
  padding: 9px 8px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.dark};
  background-color: ${(props) => props.theme.background.gray2};
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
`
export const ReplyRegisterButton = styled(ActionButton)`
  align-self: flex-end;
`
export const UserNickname = styled.p`
  ${H14_700}
  width: 100%;
  color: ${(props) => props.theme.text.black1};
`

export const ReplyCount = styled.span`
  ${P14}
  color: ${(props) => props.theme.text.gray1};
`
