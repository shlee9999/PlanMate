import { H21_700, P12, PageRoot } from 'commonStyled'
import styled from 'styled-components'
import { Scheduler } from './components'

export const Root = styled(PageRoot)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
`
export const HeaderMessage = styled.span`
  span {
    color: ${(props) => props.theme.primary.default};
  }
  ${P12}
  color: ${(props) => props.theme.text.black2};
`
export const HeaderTitleLogo = styled.p`
  ${H21_700}
  margin-top: 2px;
`

export const StyledScheduler = styled(Scheduler)`
  flex-grow: 1;
`
