import styled from 'styled-components'
import rightArrowImg from 'assets/images/right_arrow.png'
export const Root = styled.div`
  margin: 0 auto;
  width: fit-content;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
`
const ArrowImg = styled.img`
  cursor: pointer;
`
export const LeftArrowImg = styled(ArrowImg)`
  width: 18px;
  height: 18px;
  content: url(${rightArrowImg});
  transform: rotate(180deg);
`
export const RightArrowImg = styled(ArrowImg)`
  width: 18px;
  height: 18px;
  content: url(${rightArrowImg});
`

export const PageNumberTypo = styled.p`
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`
export const CurrentPageNumberTypo = styled(PageNumberTypo)`
  color: ${(props) => props.theme.text.black2};
`
