import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

interface Buttonprops {
  isButtonHovered: boolean
}

export const HeaderButton = styled.button<Buttonprops>`
  width: 96px;
  height: 32px;
  margin-left: 20px;
  border: 1px solid #01cb45;
  border-radius: 100px;
  background-color: ${(props) => (props.isButtonHovered ? '#01CB45' : 'white')};
  color: ${(props) => (props.isButtonHovered ? 'white' : '#01CB45')};
`

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`

export const MainWeeklyScheduler = styled.div``

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 5px;
  width: 64px;
  height: 32px;

  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  color: #666666;
  text-align: center;
  cursor: pointer;
`

export const PlusImg = styled.img`
  width: 15px;
  height: 15px;
`
