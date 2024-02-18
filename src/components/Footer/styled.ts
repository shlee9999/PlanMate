import { InstagramIcon, MessageIcon } from 'assets/SvgComponents'
import { FlexRow, H12_500, P11 } from 'commonStyled'
import { ALLOW_SELECT } from 'constants/blockSelect'
import {
  FOOTER_HEIGHT,
  BODY_MAX_WIDTH,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  XLARGE_SIDE_MARGIN,
  BODY_MIN_WIDTH,
  SMALL_SIDE_MARGIN,
} from 'constants/layout'
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  ${ALLOW_SELECT}
  @media screen and (${(props) => props.theme.xlarge}) {
    padding: 32px ${XLARGE_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.large}) {
    padding: 32px ${LARGE_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 32px ${MEDIUM_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 32px ${SMALL_SIDE_MARGIN}px 42px;
  }
  background-color: ${(props) => props.theme.background.gray2};
  width: 100vw;
  height: ${FOOTER_HEIGHT}px;
  * {
    font-family: 'Pretendard-Regular', sans-serif;
  }
  p {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const Footer = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  display: flex;
  justify-content: end;
  align-items: center;
`
export const RightContainer = styled(FlexRow)`
  justify-content: space-between;
  color: ${(props) => props.theme.text.gray2};
`
export const NavigateTypo = styled.p`
  ${H12_500}

  margin-right: 16px;
  &:last-child {
    margin-right: 8px;
  }
`
export const StyledInstagramIcon = styled(InstagramIcon)`
  width: 13px;
  cursor: default;
`
export const StyledMessageIcon = styled(MessageIcon)`
  cursor: default;
`
export const EmailAddressWrapper = styled(FlexRow)`
  ${P11}
  margin-right: 8px;
  gap: 2px;
`
export const EmailAddress = styled.p``
export const InstagramAddressWrapper = styled(FlexRow)`
  ${P11}
  gap: 2px;
`
export const InstagramAddress = styled.p``
