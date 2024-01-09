import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    colors: {
      black: string
      blue: string
    }
  }
}
