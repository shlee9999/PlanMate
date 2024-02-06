import { FlexRow, H14_500, H24_700, P14, PageRoot } from 'commonStyled'
import styled from 'styled-components'

export const LoginPage = styled(PageRoot)``

export const Container = styled.div`
  padding: 44px 48px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 448px;
  height: 480px;
  transform: translate(-50%, -50%);
  border: 1px solid #dddede;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoContainer = styled(FlexRow)`
  margin-bottom: 30px;
`
export const Logo = styled.img`
  width: 200px;
  position: relative;
  top: 8px;
`

export const WelcomeTypo = styled.p`
  ${H24_700}
  margin-bottom: 8px;
  white-space: nowrap;
`
export const DescriptionTypo = styled.p`
  ${P14}
  margin-bottom: 40px;
  color: #666666;
`
export const LoginTypo = styled.p`
  ${H14_500}
  margin-bottom: 25px;
  color: #222222;
`

export const Footer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
`

export const FooterItem = styled.p`
  ${P14}
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  color: #666666;
  &:not(:last-child)::after {
    content: '|';
    margin-left: 12px;
  }
`
