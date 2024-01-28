import { styled } from 'styled-components'
import { ViewportType } from 'types'

type RootProps = {
  $on: ViewportType
}

export const Root = styled.div<RootProps>`
  @media screen and (${(props) => props.theme.xlarge}) {
    //* XLARGE
    ${(props) => (props.$on === 'LARGE' || props.$on === 'MEDIUM' || props.$on === 'SMALL') && 'display:none'}
  }
  @media screen and (${(props) => props.theme.large}) {
    //* LARGE
    ${(props) => (props.$on === 'XLARGE' || props.$on === 'MEDIUM' || props.$on === 'SMALL') && 'display:none'}
    ${(props) => props.$on === 'LARGE' && 'display:unset'}
  }

  @media screen and (${(props) => props.theme.medium}) {
    //* MEDIUM
    ${(props) => (props.$on === 'XLARGE' || props.$on === 'LARGE' || props.$on === 'SMALL') && 'display:none'}
    ${(props) => props.$on === 'MEDIUM' && 'display:unset'}
  }

  @media screen and (${(props) => props.theme.small}) {
    //* SMALL
    ${(props) => (props.$on === 'XLARGE' || props.$on === 'LARGE' || props.$on === 'MEDIUM') && 'display:none'}
    ${(props) => props.$on === 'SMALL' && 'display:unset'}
  }
`
