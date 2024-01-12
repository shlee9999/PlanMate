import { PageRoot } from 'commonStyled'
import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled(PageRoot)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 160px;
  min-height: initial;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
`
export const HeaderMessage = styled.span`
  span {
    color: ${(props) => props.theme.primary.default};
  }
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.black2};
`

export const HeaderTitleLogo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 2px;
`
