import { H12_500, H21_700, P12, PageRoot } from 'commonStyled'
import styled from 'styled-components'

export const StatsPage = styled(PageRoot)`
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderContentWrapper = styled.div``

export const UserName = styled.span`
  ${H12_500}
  color: #01cb45;
`

export const PageDescription = styled.span`
  ${P12}
  letter-spacing: 0em;
  color: #444444;
`

export const PageName = styled.div`
  ${H21_700}
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
  ${H21_700}
  margin-bottom: 20px;
`
