import { H21_700, H14_500, H16_500 } from 'commonStyled'
import { ActionButton, NoContentDescription } from 'components'
import styled from 'styled-components'

export const CommentWrapper = styled.div`
  margin-bottom: 24px;
`
export const CommentTitle = styled.div`
  ${H21_700}
  margin-bottom: 24px;
`
export const CommentCount = styled.span`
  color: ${(props) => props.theme.primary.default};
  word-wrap: break-word; /*불확실*/
`

export const CommentContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.border.dark};
  &.no_content {
    border-top: none;
  }
`
export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  &.no_content {
    margin-top: 40px;
  }
`
export const CommentInput = styled.textarea`
  ${H14_500}
  padding: 9px 8px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.dark};
  background-color: ${(props) => props.theme.background.gray2};

  &::placeholder {
    color: ${(props) => props.theme.text.gray3};
  }
`
export const CommentRegisterButton = styled(ActionButton)`
  align-self: flex-end;
`
export const UserNickname = styled.p`
  ${H16_500}
  color: ${(props) => props.theme.text.black1};
`
export const NoCommentDescription = styled(NoContentDescription)`
  margin-bottom: 50px;
`
