import { EXAMINFODETAIL_MAX_WIDTH } from 'constants/layout'
import { H12_500, H14_500, H14_700, H16_500, H21_700, P10, P12, P14, PageRoot, TagRoot } from 'commonStyled'
import styled from 'styled-components'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { Spinner } from 'components/'

export const ExamInfoDetail = styled(PageRoot)`
  width: 100%;
  .editor {
    min-height: 150px;
    padding-left: 10px;
  }
  -webkit-user-select: auto;
  -ms-user-select: auto; /* IE 10 and IE 11 */
  user-select: auto; /* Standard syntax */
`
export const PostForm = styled.form``
export const TagWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  margin-bottom: 3px;
`
export const Tag = styled(TagRoot)`
  ${P12}
  color: ${(props) => props.theme.text.gray2};
`
export const UserNickname = styled.p`
  ${H16_500}
  color: ${(props) => props.theme.text.black1};
`
export const UpperTypoWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`
export const LeftTypoWrapper = styled.span`
  margin-left: 10px;
`
export const TitleTypoWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: end;
  height: 26px;
  column-gap: 6px;
`

export const RightTypoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const PostOwnerNickname = styled.span`
  ${H12_500}
  color: ${(props) => props.theme.text.gray1};
  margin-right: 12px;
`
const ButtonTypo = styled.span`
  ${H12_500}
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const EditTypo = styled(ButtonTypo)`
  margin-right: 5px;
`
export const DistributionLine = styled.hr`
  border: none;
  display: inline-block;
  background-color: ${(props) => props.theme.text.gray2};
  width: 1px;
  height: 12px;
  margin-right: 5px;
`
export const DeleteTypo = styled(ButtonTypo)``
export const TitleTypo = styled.p`
  ${H21_700}
`
export const UpdatedDate = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray2};
  margin-bottom: 2px; //없으면 줄이 안맞음
`
export const Nickname = styled.p`
  ${H14_700}
`

export const ContentWrapper = styled.div`
  ${P14}
  position: relative;
  box-sizing: border-box;
  padding: 32px 8px;
  border-top: 2px solid ${(props) => props.theme.text.black2};
  border-bottom: 1px solid ${(props) => props.theme.border.dark};
  margin-bottom: 32px;
  white-space: pre-line;
  overflow-wrap: break-word;
`

export const IconContainer = styled.div`
  ${P10}
  cursor: pointer;
  position: absolute;
  right: 8px;
  bottom: 10px;
  display: flex;
  align-items: center;
`
export const Count = styled.p`
  ${P12}
  margin-right: 5px;
`
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

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const EditCompleteButton = styled(ActionButton)`
  align-self: flex-end;
  margin-bottom: 10px;
`

export const Content = styled.div``

export const DetailSpinner = styled(Spinner)`
  padding-top: 150px;
  border-top: 2px solid ${(props) => props.theme.text.black2};
`
