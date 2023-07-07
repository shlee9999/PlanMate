import { HEADER_HEIGHT, MAX_WIDTH, MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'
export const Root = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH}px;
  min-width: ${MIN_WIDTH}px;
  position: relative;
  margin-top: ${HEADER_HEIGHT}px;
  background-color: red;
`

export const TagRoot = styled.p`
  &::before {
    content: '#';
  }
`
