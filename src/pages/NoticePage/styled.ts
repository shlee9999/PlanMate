import styled from 'styled-components'
import { H21_700, P12, PageRoot } from 'commonStyled'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { NoContentDescription } from 'components'
import { BLOCK_SELECT } from 'constants/blockSelect'

export const Root = styled(PageRoot)`
  ${BLOCK_SELECT}
`

export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const PageTitle = styled.p`
  ${H21_700}
  color: ${(props) => props.theme.text.black2};
`
export const SubTitle = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.black2};
`

export const PostContainer = styled.div`
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text.gray1};
  display: flex;
  flex-direction: column;
`

export const NoNotice = styled(NoContentDescription)`
  margin-top: 100px;
  margin-bottom: 100px;
`
export const BulletinButton = styled(ActionButton)`
  align-self: flex-end;
`
