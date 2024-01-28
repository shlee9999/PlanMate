import { MEDIUM_SIZE, LARGE_SIZE } from 'constants/layout'
import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  primary: {
    default: '#01CB45',
    light: '#E2F9E9',
    dark: '#1DB951',
  },
  body: '#FFFFFF',
  border: {
    default: '#DDDEDE',
    dark: '#c6c6c6',
  },
  text: {
    white: '#FFFFFF',
    black1: '#222222',
    black2: '#444444',
    gray1: '#666666',
    gray2: '#888888',
    gray3: '#C6C6C6',
  },
  background: {
    white: '#FFFFFF',
    gray1: '#D9D9D9',
    gray2: '#F9F9F9',
    gray3: '#ebebeb',
    red: 'fbe6e7',
  },
  warning: '#FF3636',
  yellow: '#ffc955',
  small: `max-width: 480px`,
  medium: `max-width: ${MEDIUM_SIZE}px`,
  large: `max-width: ${LARGE_SIZE}px`,
  xlarge: `min-width: ${LARGE_SIZE}px`,
}
// export const darkTheme: DefaultTheme = {}
