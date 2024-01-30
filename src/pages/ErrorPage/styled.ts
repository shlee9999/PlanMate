import { NoConnectionIcon } from 'assets/SvgComponents'
import { H16_500, H21_700, PageRoot } from 'commonStyled'
import styled from 'styled-components'

export const ErrorPage = styled(PageRoot)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`
export const ErrorImg = styled(NoConnectionIcon)`
  margin-top: 140px;
  width: 80px;
  height: 80px;
`
export const UpperTypo = styled.p`
  ${H21_700}
  color: ${(props) => props.theme.text.black2};
`
export const LowerTypo = styled.p`
  ${H16_500}
  color: ${(props) => props.theme.text.gray3};
`
export const RetryButton = styled.button`
  margin-top: 32px;
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary.default};
  color: ${(props) => props.theme.primary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.text.white};
    background-color: ${(props) => props.theme.primary.dark};
  }
`
