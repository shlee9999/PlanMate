import { styled } from 'styled-components'
import { DISPLAY, DisplayType } from 'types'

type RootProps = {
  $on: DisplayType
}

export const Root = styled.div<RootProps>`
  @media screen and (${(props) => props.theme.xlarge}) {
    //* XLARGE
    ${(props) =>
      (props.$on === DISPLAY.LARGE || props.$on === DISPLAY.MEDIUM || props.$on === DISPLAY.SMALL) && 'display:none'}
  }
  @media screen and (${(props) => props.theme.large}) {
    //* LARGE
    ${(props) =>
      (props.$on === DISPLAY.XLARGE || props.$on === DISPLAY.MEDIUM || props.$on === DISPLAY.SMALL) && 'display:none'}
    ${(props) => props.$on === DISPLAY.LARGE && 'display:unset'}
  }

  @media screen and (${(props) => props.theme.medium}) {
    //* MEDIUM
    ${(props) =>
      (props.$on === DISPLAY.XLARGE || props.$on === DISPLAY.LARGE || props.$on === DISPLAY.SMALL) && 'display:none'}
    ${(props) => props.$on === DISPLAY.MEDIUM && 'display:unset'}
  }

  @media screen and (${(props) => props.theme.small}) {
    //* SMALL
    ${(props) =>
      (props.$on === DISPLAY.XLARGE || props.$on === DISPLAY.LARGE || props.$on === DISPLAY.MEDIUM) && 'display:none'}
    ${(props) => props.$on === DISPLAY.SMALL && 'display:unset'}
  }
`
