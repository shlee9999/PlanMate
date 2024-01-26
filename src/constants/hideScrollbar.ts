import { css } from 'styled-components'

export const HIDE_SCROLLBAR = css`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
