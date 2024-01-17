import { FC } from 'react'
import { ErrorImg, LowerTypo, RetryButton, Root, UpperTypo } from './styled'

import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'theme'
import { GlobalStyle } from 'globalStyle'
import Footer from 'components/Footer'
import { Header } from 'components/Header'
export const ErrorPage: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <Root>
        <ErrorImg />
        <UpperTypo>이런! 일시적인 오류에요.</UpperTypo>
        <LowerTypo>잠시 후 다시 시도해주세요.</LowerTypo>
        <RetryButton
          onClick={() => {
            window.location.reload()
          }}
        >
          다시 시도
        </RetryButton>
      </Root>
      <Footer />
    </ThemeProvider>
  )
}
