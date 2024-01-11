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
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #01cb45;
`

export const HeaderMessage = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #444444;
`

export const HeaderPageTitle = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
`

export const HeaderDividingLine = styled.hr`
  width: 100%;
  margin: 20px 0px;
  align-items: left;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
`
export const MainHeaderTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 20px;
`

export const ChartDividingLine = styled.hr`
  width: 98%;
  margin-top: 20px;
  align-items: left;
`

export const MainContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
  flex-wrap: wrap;
  gap: 20px;
`

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`

export const ShareButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #dddede;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: center;
`

export const MessengerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 53px;
  border-radius: 8px;
  border: 1px solid #dddede;
  font-size: 8px;
`

export const MessengerContentsWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0em;
  text-align: center;
`

export const IconContents = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0em;
  text-align: center;
  color: #888888;
  margin-top: 3px;
`
