import { MEDIUM_SIZE, LARGE_SIZE, SMALL_SIZE } from 'constants/layout'
import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  primary: {
    default: 'rgba(1, 203, 69, 1)', // #01CB45
    light: 'rgba(226, 249, 233, 1)', // #E2F9E9
    dark: 'rgba(29, 185, 81, 1)', // #1DB951
  },
  body: 'rgba(255, 255, 255, 1)', // #FFFFFF
  border: {
    default: 'rgba(221, 222, 222, 1)', // #DDDEDE
    dark: 'rgba(198, 198, 198, 1)', // #c6c6c6
  },
  text: {
    white: 'rgba(255, 255, 255, 1)', // #FFFFFF
    black1: 'rgba(34, 34, 34, 1)', // #222222
    black2: 'rgba(68, 68, 68, 1)', // #444444
    gray1: 'rgba(102, 102, 102, 1)', // #666666
    gray2: 'rgba(136, 136, 136, 1)', // #888888
    gray3: 'rgba(198, 198, 198, 1)', // #C6C6C6
    gray4: 'rgba(176, 176, 176, 1)', // #B0B0B0
  },
  background: {
    white: 'rgba(255, 255, 255, 1)', // #FFFFFF
    gray1: 'rgba(217, 217, 217, 1)', // #D9D9D9
    gray2: 'rgba(249, 249, 249, 1)', // #F9F9F9
    gray3: 'rgba(235, 235, 235, 1)', // #ebebeb
    red: 'rgba(251, 230, 231, 1)', // fbe6e7 (여기서 오타가 있었습니다. '#'가 빠졌습니다.)
  },
  warning: 'rgba(255, 54, 54, 1)', // #FF3636
  yellow: 'rgba(255, 201, 85, 1)', // #ffc955
  small: `max-width: ${SMALL_SIZE}px`,
  medium: `max-width: ${MEDIUM_SIZE}px`,
  large: `max-width: ${LARGE_SIZE}px`,
  xlarge: `min-width: ${LARGE_SIZE}px`,
}
// export const darkTheme: DefaultTheme = {}
