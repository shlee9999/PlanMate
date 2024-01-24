import { RightArrow } from 'assets/SvgComponents'
import { LeftArrow } from 'commonStyled'
import styled from 'styled-components'
export const Root = styled.div`
  margin: 0 auto;
  width: fit-content;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
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

export const PrevButton = styled(LeftArrow)`
  color: ${(props) => props.theme.text.gray1};
`
export const NextButton = styled(RightArrow)`
  color: ${(props) => props.theme.text.gray1};
`
