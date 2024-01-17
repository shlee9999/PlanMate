import { FOOTER_HEIGHT, FOOTER_MAX_WIDTH, FOOTER_MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  -webkit-user-select: none;
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  box-sizing: border-box;
  padding: 32px 160px 42px;
  background-color: ${(props) => props.theme.background.gray2};
  width: 100vw;
  height: ${FOOTER_HEIGHT}px;
`

export const ContentWrapper = styled.div`
  max-width: ${FOOTER_MAX_WIDTH}px;
  min-width: ${FOOTER_MIN_WIDTH}px;
  display: flex;
  justify-content: end;
  align-items: center;
`
export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
`
export const NavigateTypo = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: ${(props) => props.theme.text.gray2};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
