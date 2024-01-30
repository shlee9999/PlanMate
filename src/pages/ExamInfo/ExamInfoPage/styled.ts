import { H21_700, P12, PageRoot } from 'commonStyled'
import styled from 'styled-components'
import { EXAMINFOITEM_MIN_WIDTH } from 'constants/layout'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { NoContentDescription, Spinner } from 'components/'
import { TagSelector } from '../components'
export const ExamInfoPage = styled(PageRoot)`
  min-width: auto;
`
const DescriptionTypo = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.black2};
`

export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleTypo = styled.p`
  ${H21_700}
  color: ${(props) => props.theme.text.black2};
  margin-bottom: 24px;
`

export const UpperDescriptionTypo = styled(DescriptionTypo)``
export const LowerDescriptionTypo = styled(DescriptionTypo)``

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

export const StyledTagSelector = styled(TagSelector)`
  position: absolute;
  top: -40px;
  right: 0;
`
