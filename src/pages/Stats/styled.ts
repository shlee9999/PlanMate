import { PageRoot } from 'commonStyled'
import { FOOTER_HEIGHT, HEADER_HEIGHT, SIDE_MARGIN } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled(PageRoot)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderContentWrapper = styled.div``

export const UserName = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: #01cb45;
`

export const PageDescription = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: #444444;
`

export const PageName = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`

export const HeaderDividingLine = styled.hr`
  width: 100%;
  margin: 20px 0px;
  align-items: left;
  background-color: ${(props) => props.theme.border.default};
`

export const Container = styled.div`
  width: 100%;
`
export const Title = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 20px;
`

export const StatsContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`
