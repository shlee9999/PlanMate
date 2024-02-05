import { H14_500, H24_700, P14, PageRoot } from 'commonStyled'
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
export const UpperContainer = styled.div`
  display: flex;
  margin-bottom: 18.5px;
`

export const UpperDescriptionTypo = styled.p`
  ${H24_700}
  margin-bottom: 8px;
  white-space: nowrap;
`
export const LowerDescriptionTypo = styled.p`
  ${P14}
  margin-bottom: 40px;
  color: #666666;
`
export const LoginTypo = styled.p`
  ${H14_500}
  margin-bottom: 15px;
  color: #222222;
`

export const GoogleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 240px;
  height: 48px;
  box-sizing: border-box;
  padding: 0 8px;
  background: white;
  border-radius: 3px;
  white-space: nowrap;
  font-family: serif !important;
  box-shadow: 0px 4px 5px 0px #0000000f;
  border: 1px solid #dddede;
  &:hover {
    border-color: #4285f4;
  }
`

export const GoogleButtonTypo = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${H14_500}
  /* Use the Roboto font that is loaded in the <head> */
  font-family: 'Roboto', sans-serif !important;
  color: black;
  line-height: 16px;
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
