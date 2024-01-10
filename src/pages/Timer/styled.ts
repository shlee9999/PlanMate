import styled from 'styled-components'
import plusImg from 'assets/images/plus.png'
import bannerImg from 'assets/images/banner.jpeg'
import { BODY_MAX_WIDTH, SIDE_MARGIN } from 'constants/layout'
import { PageRoot } from 'commonStyled'

export const Banner = styled.div`
  box-sizing: border-box;
  padding: 30px ${SIDE_MARGIN}px;
  background: url(${bannerImg}) no-repeat 0 0;
  background-size: cover;
  width: 100vw;
`

export const Root = styled(PageRoot)`
  @media (min-width: ${BODY_MAX_WIDTH}px) {
    ${Banner} {
      position: relative;
      right: calc((100vw - ${BODY_MAX_WIDTH}px) / 2);
    }
  }
`

export const SizedBox = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`
export const BannerContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH - SIDE_MARGIN * 2}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const LeftTopDescriptionWrapper = styled.div``
export const LeftContainer = styled.div`
  flex-basis: 400px;
  display: flex;
  flex-direction: column;
`
export const DateTypo = styled.p`
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: ${(props) => props.theme.text.black2};
`
export const Title = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 8px;
`
export const ResultContainer = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.background.white};
  position: relative;
  box-sizing: border-box;
  padding: 32px;
  height: 270px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
`
export const UpperDescriptionTypo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`

export const LowerDescriptionTypo = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
  bottom: 20px;
  left: 32px;
`
export const YellowTypo = styled.span`
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.yellow};
  word-wrap: break-word;
`

export const StatsContainer = styled.div`
  background-color: ${(props) => props.theme.background.white};
  height: 270px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border.default};
  box-sizing: border-box;
  padding: 10px 15px 0px 15px;
`

export const TodoContainer = styled.div`
  &.no_content {
    margin-bottom: 50px;
  }
`

export const RightContainer = styled.div`
  flex-grow: 1;
  flex-basis: 689px;
  box-sizing: border-box;
  padding-top: 17px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-width: 400px;
  max-width: 780px;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 5px;
  width: 64px;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  color: ${(props) => props.theme.text.gray1};
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.background.gray3};
`
export const PlusImg = styled.img`
  width: 15px;
  height: 15px;
  content: url(${plusImg});
`
export const LowerContainer = styled.div`
  position: relative;
  padding: 112px 160px 0;
`

export const CheerTypo = styled.div`
  position: absolute;
  top: 23px;
  left: 162px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text.black2};
  line-height: 18px;
`
export const Dday = styled.span`
  font-size: 32px;
  font-weight: 700;
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
  font-weight: 700;
`
