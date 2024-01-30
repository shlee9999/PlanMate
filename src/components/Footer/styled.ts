import { H12_500 } from 'commonStyled'
import { BLOCK_SELECT } from 'constants/blockSelect'
import {
  FOOTER_HEIGHT,
  FOOTER_MAX_WIDTH,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  XLARGE_SIDE_MARGIN,
} from 'constants/layout'
import styled from 'styled-components'

export const Footer = styled.div`
  ${BLOCK_SELECT}
  @media screen and (${(props) => props.theme.xlarge}) {
    padding: 32px ${XLARGE_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.large}) {
    padding: 32px ${LARGE_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 32px ${MEDIUM_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.small}) {
    opacity: 0;
  }
  background-color: ${(props) => props.theme.background.gray2};
  width: 100vw;
  height: ${FOOTER_HEIGHT}px;
`

export const ContentWrapper = styled.div`
  max-width: ${FOOTER_MAX_WIDTH}px;
  display: flex;
  justify-content: end;
  align-items: center;
`
export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
`
export const NavigateTypo = styled.p`
  ${H12_500}
  line-height: 15px;
  color: ${(props) => props.theme.text.gray2};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
