import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
export const Root = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  position: relative;
  margin-top: ${HEADER_HEIGHT}px;
`

export const TagRoot = styled.p`
  &::before {
    content: '#';
  }
`
