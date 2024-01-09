import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 160px;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  margin-bottom: 20px;
`
export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: none;
`

export const HeaderMessage = styled.span`
  span {
    color: #01cb45;
  }
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #444444;
`

export const HeaderTitleLogo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 2px;
`

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`
