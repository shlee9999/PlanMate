import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.primary.default};
`

export const HeaderMessage = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.black2};
`

export const HeaderPageTitle = styled.div`
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
  letter-spacing: 0em;
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

export const IconVector = styled.img`
  width: 12px;
  height: 13.333333015441895px;
  margin-right: 2px;
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

export const IconURl = styled.img`
  width: 19.8px;
  height: 19.8px;
`

export const IconKakaoTalk = styled.img`
  width: 21px;
  height: 19.2px;
`

export const IconInstagram = styled.img`
  width: 20px;
  height: 20px;
`

export const IconContents = styled.p`
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0em;
  text-align: center;
  color: #888888;
  margin-top: 3px;
`

export { Root }
