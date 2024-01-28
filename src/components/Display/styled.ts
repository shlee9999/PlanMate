import { ViewportType } from 'enums'
import { styled } from 'styled-components'

type RootProps = {
  $on: ViewportType
}

export const Root = styled.div<RootProps>`
  @media screen and (${(props) => props.theme.xlarge}) {
    //* XLARGE
    ${(props) =>
      (props.$on === ViewportType.LARGE || props.$on === ViewportType.MEDIUM || props.$on === ViewportType.SMALL) &&
      'display:none'}
  }
  @media screen and (${(props) => props.theme.large}) {
    //* LARGE
    ${(props) =>
      (props.$on === ViewportType.XLARGE || props.$on === ViewportType.MEDIUM || props.$on === ViewportType.SMALL) &&
      'display:none'}
    ${(props) => props.$on === ViewportType.LARGE && 'display:unset'}
  }

  @media screen and (${(props) => props.theme.medium}) {
    //* MEDIUM
    ${(props) =>
      (props.$on === ViewportType.XLARGE || props.$on === ViewportType.LARGE || props.$on === ViewportType.SMALL) &&
      'display:none'}
    ${(props) => props.$on === ViewportType.MEDIUM && 'display:unset'}
  }

  @media screen and (${(props) => props.theme.small}) {
    //* SMALL
    ${(props) =>
      (props.$on === ViewportType.XLARGE || props.$on === ViewportType.LARGE || props.$on === ViewportType.MEDIUM) &&
      'display:none'}
    ${(props) => props.$on === ViewportType.SMALL && 'display:unset'}
  }
`
