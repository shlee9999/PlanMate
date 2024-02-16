import styled from 'styled-components'
import bannerImg from 'assets/images/banner_light.svg'
import { BODY_MAX_WIDTH, XLARGE_SIDE_MARGIN, HEADER_HEIGHT } from 'constants/layout'
import { H14_500, H14_700, H21_700, H32_700, H46_700, P12, P14, PageRoot } from 'commonStyled'
import { InfoBox } from 'components/'

export const TimerPage = styled(PageRoot)`
  padding-bottom: 30px;
`

export const Banner = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  background: url(${bannerImg}) no-repeat 0 0;
  background-size: cover;
  width: 100vw;
  height: 400px;
`
export const BannerContentContainer = styled.div`
  max-width: ${BODY_MAX_WIDTH - XLARGE_SIDE_MARGIN * 2}px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  gap: 20px;
  @media screen and (${(props) => props.theme.medium}) {
    flex-direction: column;
  }
`
export const LeftTopDescriptionWrapper = styled.div``
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
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
  height: 292px;
  @media screen and (${(props) => props.theme.medium}) {
    height: 100%;
    gap: 15px;
    padding: 20px 32px 15px 32px;
  }
`
export const Description = styled.p`
  ${P14}
`

export const StatsBox = styled(InfoBox)``

export const RightContainer = styled.div`
  flex-grow: 1;
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
  column-gap: 35px;
  row-gap: 20px;
  flex-wrap: wrap;
  line-height: 58px;
`
export const Mode = styled.p`
  ${H46_700}
  white-space: nowrap;
`
