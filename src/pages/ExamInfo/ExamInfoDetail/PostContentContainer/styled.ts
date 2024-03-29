import { P14, P10, P12, H12_500, H14_700, H21_700, TagRoot, H18_700 } from 'commonStyled'
import { Spinner, ActionButton } from 'components'
import styled from 'styled-components'

export const PostContentContainer = styled.div``
export const DetailSpinner = styled(Spinner)`
  padding-top: 150px;
  border-top: 2px solid ${(props) => props.theme.text.black2};
`
export const ContentWrapper = styled.div`
  ${P14}
  position: relative;
  padding: 32px 8px;
  border-top: 2px solid ${(props) => props.theme.text.black2};
  border-bottom: 1px solid ${(props) => props.theme.border.dark};
  margin-bottom: 32px;
  white-space: pre-line;
  overflow-wrap: break-word;
  line-height: 1.2;
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

export const PostButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: absolute;
  top: -25px;
  right: 0;
  @media screen and (${(props) => props.theme.small}) {
    top: -21px;
  }
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

export const UpperTypoWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  @media screen and (${(props) => props.theme.small}) {
    margin-bottom: 20px;
  }
`
export const LeftTypoWrapper = styled.span`
  margin-left: 10px;
`
export const TitleTypoContainer = styled.span`
  position: relative;
  display: flex;
  align-items: end;
  column-gap: 6px;
  @media screen and (${(props) => props.theme.medium}) {
    flex-direction: column;
    align-items: start;
  }
`

export const TitleTypo = styled.p`
  ${H21_700}
  @media screen and (${(props) => props.theme.medium}) {
    ${H18_700}
  }
  white-space: nowrap;
`
export const UpdatedDate = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray2};
  margin-bottom: 2px; //없으면 줄이 안맞음
  @media screen and (${(props) => props.theme.medium}) {
    order: -1;
  }
`
export const Nickname = styled.p`
  ${H14_700}
`
