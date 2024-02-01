import styled from 'styled-components'
import bannerImg from 'assets/images/banner_light.svg'
import { BODY_MAX_WIDTH, XLARGE_SIDE_MARGIN, HEADER_HEIGHT } from 'constants/layout'
import { H14_500, H14_700, H21_700, H32_700, H36_500, H46_700, P12, P14, PageRoot } from 'commonStyled'
import { InfoBox, Spinner } from 'components/'

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
export const StudyTimeContainer = styled(InfoBox)`
  position: relative;
  padding: 32px;

  height: 270px;
`
export const Description = styled.p`
  ${P14}
`

export const BreakTime = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  ${H14_500}
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
  bottom: 20px;
  left: 32px;
`
export const YellowTypo = styled.span`
  ${P14}
  text-align: center;
  color: ${(props) => props.theme.yellow};
  word-wrap: break-word;
`

export const StatsBox = styled(InfoBox)`
  height: 270px;
`

export const TodoContainer = styled.div`
  &.no_content {
    margin-bottom: 50px;
  }
`

export const RightContainer = styled.div`
  flex-grow: 1;
  flex-basis: 500px;
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  min-width: 0px;
`

export const AddButton = styled.button`
  ${P14}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 5px;
  width: 64px;
  height: 32px;
  color: ${(props) => props.theme.text.gray1};
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.background.gray3};
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

export const TodoSpinner = styled(Spinner)``

export const TotalTimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 74px;
  height: 58px;
  line-height: 58px;
`
export const Mode = styled.p`
  ${H46_700}
`
