import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    primary: string
    light_primary: string
    dark_primary: string
    border: {
      gray: string
      green: string
    }
    font: {
      white: string
      black1: string
      black2: string
      gray1: string
      gray2: string
      gray3: string
    }
    background: {
      gray1: string
      gray2: string
    }
    warning: string
  }
}
