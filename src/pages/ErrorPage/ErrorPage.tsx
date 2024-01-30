import { FC } from 'react'
import * as s from './styled'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'theme'
import { GlobalStyle } from 'globalStyle'
import { Footer, Header } from 'components/'

export const ErrorPage: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <s.ErrorPage>
        <s.ErrorImg />
        <s.UpperTypo>이런! 일시적인 오류에요.</s.UpperTypo>
        <s.LowerTypo>잠시 후 다시 시도해주세요.</s.LowerTypo>
        <s.RetryButton
          onClick={() => {
            window.location.reload()
          }}
        >
          다시 시도
        </s.RetryButton>
      </s.ErrorPage>
      <Footer />
    </ThemeProvider>
  )
}
