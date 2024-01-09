import { DefaultTheme } from 'styled-components'
export const lightTheme: DefaultTheme = {
  primary: '#01CB45',
  colors: {
    black: '#222222',
  },
}
export const darkTheme: DefaultTheme = {}
export type ThemeType = typeof lightTheme
