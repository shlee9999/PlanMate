import { RightArrow } from 'assets/SvgComponents'
import { H12_500, LeftArrow } from 'commonStyled'
import styled from 'styled-components'
export const Pagination = styled.div`
  margin: 0 auto;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: fit-content;
  @media screen and (${(props) => props.theme.large}) {
    gap: 8px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    gap: 10px;
  }
  @media screen and (${(props) => props.theme.small}) {
    gap: 5px;
  }
`

export const PageNumberTypo = styled.p<{ $isCurrent: boolean }>`
  ${H12_500}
  cursor: ${(props) => (props.$isCurrent ? 'text' : 'pointer')};
  text-align: center;
  color: ${(props) => (props.$isCurrent ? props.theme.text.black2 : props.theme.text.gray4)};
  width: 15px;
`

export const PrevButton = styled(LeftArrow)`
  color: ${(props) => props.theme.text.gray1};
`
export const NextButton = styled(RightArrow)`
  color: ${(props) => props.theme.text.gray1};
`
