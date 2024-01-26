import { H12_500, H21_700, P12, PageRoot } from 'commonStyled'
import { Calendar } from 'components'
import { InfoBox } from 'components'
import styled from 'styled-components'

export const Root = styled(PageRoot)`
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

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  min-height: fit-content;
  flex-wrap: wrap;
`

export const LeftInfoBox = styled(InfoBox)`
  position: relative;
  min-width: 0px;
  flex: 1 0 400px;
  max-width: 420px;
  overflow: hidden;
  padding: 24px 25px;
  height: 450px;
  @media screen and (${(props) => props.theme.tablet}) {
    width: 100%;
    max-width: none;
  }
`
export const RightInfoBox = styled(InfoBox)`
  flex-basis: 402px;
  min-width: 0;
  flex-grow: 1;

  @media screen and (${(props) => props.theme.tablet}) {
    width: 100%;
    flex-grow: 1;
    height: 550px;
  }
  overflow: visible;
`
export const StatsCalendar = styled(Calendar)``
