import { RightArrow } from 'assets/SvgComponents'
import { H12_500, LeftArrow } from 'commonStyled'
import styled from 'styled-components'
export const Root = styled.div`
  margin: 0 auto;
  height: 24px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
`

export const PageNumberTypo = styled.p<{ $isCurrent: boolean }>`
  ${H12_500}
  cursor: ${(props) => (props.$isCurrent ? 'text' : 'pointer')};
  text-align: center;
  color: ${(props) => (props.$isCurrent ? props.theme.text.black2 : props.theme.text.gray1)};
  width: 15px;
`

export const PrevButton = styled(LeftArrow)`
  color: ${(props) => props.theme.text.gray1};
`
export const NextButton = styled(RightArrow)`
  color: ${(props) => props.theme.text.gray1};
`
