import { MEDIUM_SIZE, LARGE_SIZE } from 'constants/layout'
import styled from 'styled-components'

type RootProps = {
  $on: 'MOBILE' | 'TABLET' | 'DESKTOP'
}
export const Root = styled.div<RootProps>`
  @media screen and (min-width: ${LARGE_SIZE}px) {
    //* DeskTop
    ${(props) => (props.$on === 'MOBILE' || props.$on === 'TABLET') && 'display:none'}
  }

  @media screen and (min-width: ${MEDIUM_SIZE}px) and (max-width: ${LARGE_SIZE}px) {
    //* Tablet
    ${(props) => (props.$on === 'MOBILE' || props.$on === 'DESKTOP') && 'display:none'}
    ${(props) => props.$on === 'TABLET' && 'display:unset'}
  }
  @media screen and (max-width: ${MEDIUM_SIZE}px) {
    //* Mobile
    ${(props) => (props.$on === 'TABLET' || props.$on === 'DESKTOP') && 'display:none'}
    ${(props) => props.$on === 'MOBILE' && 'display:unset'}
  }
`
