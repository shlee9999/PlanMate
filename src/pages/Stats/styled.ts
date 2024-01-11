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
  border: 1px solid ${(props) => props.theme.border.default};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  text-transform: center;
`

export const SNSItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 53px;
  border-radius: 8px;
  border: 1px solid #dddede;
  font-size: 8px;
`

export const SNSItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
`

export const SNSLabel = styled.p`
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  text-align: center;
  color: ${(props) => props.theme.text.gray2};
  margin-top: 3px;
`
