import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    primary: {
      default: string
      light: string
      dark: string
    }
    body: string
    border: {
      default: string
      primary: string
    }
    text: {
      white: string
      black1: string
      black2: string
      gray1: string
      gray2: string
      gray3: string
    }
    background: {
      white: string
      gray1: string
      gray2: string
    }
    warning: string
  }
}
