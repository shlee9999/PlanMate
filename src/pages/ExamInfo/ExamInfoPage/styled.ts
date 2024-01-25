import { PageRoot, TagRoot } from 'commonStyled'
import styled from 'styled-components'
import { EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { NoContentDescription, Spinner } from 'components/'
export const Root = styled(PageRoot)`
  padding: 45px 160px 40px;
`
const DescriptionTypo = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: ${(props) => props.theme.text.black2};
`

export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleTypo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  color: ${(props) => props.theme.text.black2};
`

export const UpperDescriptionTypo = styled(DescriptionTypo)``
export const LowerDescriptionTypo = styled(DescriptionTypo)`
  margin-top: 24px;
`

export const BulletinButton = styled(ActionButton)`
  align-self: flex-end;
  margin: 24px 0;
  bottom: -50px;
`

export const ExamInfoWrapper = styled.div`
  min-width: ${EXAMINFOITEM_MIN_WIDTH}px;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text.gray1};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoContent = styled(NoContentDescription)`
  margin-top: 84px;
  margin-bottom: 100px;
`

export const PaginationWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const PostSpinner = styled(Spinner)`
  margin: 80px 0;
`
