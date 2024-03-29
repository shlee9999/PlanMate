import styled from 'styled-components'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { HIDE_SCROLLBAR } from 'constants/hideScrollbar'
import { FlexRow, H14_500, H14_700, P10, P12, P14 } from 'commonStyled'
import { EllipsisIcon } from 'assets/SvgComponents'

export const EllipsisButton = styled(EllipsisIcon)<{ $isEllipsisOpen: boolean }>`
  transform: rotate(90deg);
  position: absolute;
  cursor: pointer;
  z-index: 1;
  right: 3px;
  top: 0;
  width: 16px;
  opacity: ${(props) => (props.$isEllipsisOpen ? 1 : 0)};
`
export const Comment = styled.div<{ $isMyPage: boolean }>`
  position: relative;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border.dark};
  &:hover {
    ${EllipsisButton} {
      opacity: 1;
    }
  }
  height: ${(props) => props.$isMyPage && '80px'};
`
export const UpperTypoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`
export const CommentEditForm = styled.form<{ $isMyPage: boolean }>`
  width: 100%;
  padding: ${(props) => (props.$isMyPage ? '16px 0 0 8px;' : '16px 0 14px 0;')};
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
export const CommentContent = styled.p`
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

export const AuthorIcon = styled(FlexRow)`
  ${P10}
  width: 40px;
  height: 14px;
  justify-content: center;
  line-height: 14px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary.default};
  background-color: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.primary.default};
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
