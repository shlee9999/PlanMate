import styled from 'styled-components'
import bannerImg from 'assets/images/banner_light.svg'
import {
  BODY_MAX_WIDTH,
  XLARGE_SIDE_MARGIN,
  HEADER_HEIGHT,
  BANNER_MAX_WIDTH,
  BANNER_HEIGHT,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  SMALL_SIDE_MARGIN,
  MEDIUM_SIZE,
} from 'constants/layout'
import { FlexRow, H14_500, H14_700, H21_700, H32_700, H46_700, P12, P14, PageRoot } from 'commonStyled'
import { InfoBox } from 'components'

export const TimerPage = styled(PageRoot)`
  margin-top: 0;
  padding-top: 25px;
  padding-bottom: 30px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${BANNER_HEIGHT}px);
`

export const Banner = styled(FlexRow)`
  margin: ${HEADER_HEIGHT}px auto 0 auto;
  max-width: ${BANNER_MAX_WIDTH}px;
  background: url(${bannerImg}) no-repeat 0 0;
  background-size: cover;
  width: 100%;
  min-height: ${BANNER_HEIGHT};
  height: fit-content;
  justify-content: center;
  @media screen and (${(props) => props.theme.xlarge}) {
    padding: 30px ${XLARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    padding: 30px ${LARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 20px ${MEDIUM_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    padding: 10px ${SMALL_SIDE_MARGIN}px;
  }
`
export const BannerContentContainer = styled.div`
  max-width: ${BODY_MAX_WIDTH - 2 * XLARGE_SIDE_MARGIN}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (${(props) => props.theme.medium}) {
    flex-direction: column;
    height: fit-content;
  }
`
export const LeftTopDescriptionWrapper = styled.div``
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 350px;
  @media screen and (${(props) => props.theme.medium}) {
    width: 100%;
  }
`
export const DateTypo = styled.p`
  ${P12}
  margin-bottom: 3px;
  color: ${(props) => props.theme.text.black2};
`
export const Title = styled.p`
  ${H21_700}
  margin-bottom: 8px;
`
export const UpperContainer = styled.div``
export const StudyTimeContainer = styled(InfoBox)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 32px 32px 28px 32px;
  height: 100%;
  @media screen and (${(props) => props.theme.large}) {
    padding: 25px 20px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    gap: 15px;
    padding: 20px 15px;
  }
`
export const Description = styled.p`
  ${P14}
`

export const StatsBox = styled(InfoBox)``

export const RightContainer = styled.div`
  flex-grow: 10;
  flex-basis: 500px;
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  min-width: 0px;
`

export const LowerContainer = styled.div`
  position: relative;
`

export const CheerTypo = styled.div`
  ${H14_500}
  color: ${(props) => props.theme.text.black2};
  line-height: 18px;
  margin-bottom: 50px;
`
export const Dday = styled.span`
  ${H32_700}
  line-height: 40px;
  color: ${(props) => props.theme.text.black2};
`

export const GreenTypo = styled.span`
  color: ${(props) => props.theme.primary.default};
  word-wrap: break-word;
  &.no_dday {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const Test = styled.span`
  ${H14_700}
`

export const TotalTimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 35px;
  row-gap: 10px;
  flex-wrap: wrap;
  @media screen and (min-width: ${MEDIUM_SIZE + 1}px) and (max-width: 1208px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: start;
  }
`
export const Mode = styled.p`
  ${H46_700}
  white-space: nowrap;
`
