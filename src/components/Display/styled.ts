import { MOBILE_SIZE, TABLET_SIZE } from 'constants/layout'
import styled from 'styled-components'

type RootProps = {
  $on: 'MOBILE' | 'TABLET' | 'DESKTOP'
}
export const Root = styled.div<RootProps>`
  //* DeskTop
  ${(props) => (props.$on === 'MOBILE' || 'TABLET') && 'display:none'}
  @media screen and (max-width: ${MOBILE_SIZE}) {
    ${(props) => (props.$on === 'TABLET' || 'DESKTOP') && 'display:none'} //* Mobile
    ${(props) => props.$on === 'MOBILE' && 'display:unset'}
  }
  @media screen and (max-width: ${TABLET_SIZE}) {
    ${(props) => (props.$on === 'MOBILE' || 'DESKTOP') && 'display:none'} //* Tablet
    ${(props) => props.$on === 'TABLET' && 'display:unset'}
  }
`
