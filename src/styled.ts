import { HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
import { StylisContext } from 'styled-components/dist/models/StyleSheetManager'

export const Root = styled.div`
  position: relative;
  margin-top: ${HEADER_HEIGHT}px;
`

export const TagRoot = styled.p`
  &::before {
    content: '#';
  }
`
