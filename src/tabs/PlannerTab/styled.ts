import styled, { css } from 'styled-components'

export const Root = styled.div``

export const HeaderContainer = styled.div`
  display: flex;
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserGreeting = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
`

export const HeaderTitleLogo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
`

interface Buttonprops {
  isButtonHovered: boolean
}

export const HeaderButton = styled.button<Buttonprops>`
  position: absolute;
  top: 107px;
  left: 284px;
  width: 96px;
  height: 32px;
  border: 1px solid #01cb45;
  border-radius: 100px;
  background-color: ${(props) => (props.isButtonHovered ? '#01CB45' : 'white')};
  color: ${(props) => (props.isButtonHovered ? 'white' : '#01CB45')};
`

export const MainContainer = styled.div``

export const MainNavContainer = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
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
