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

export const StatsContainer = styled.div`
  position: relative;
  display: flex;
  height: 400px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

export const LeftInfoBox = styled(InfoBox)`
  position: relative;
  flex-grow: 1;
  max-width: 420px;
  overflow: hidden;
  padding: 24px 25px;
`
export const RightInfoBox = styled(InfoBox)`
  flex-grow: 1;
  max-width: 800px;
  overflow: visible;
`
export const StatsCalendar = styled(Calendar)``
