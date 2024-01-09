import { FC } from 'react'
import { ErrorImg, LowerTypo, RetryButton, Root, UpperTypo } from './styled'
import noConnectionImg from 'assets/images/no_connection.png'
import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { FooterSection } from 'pages/CommonSections/FooterSection'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'theme'
export const ErrorPage: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <HeaderSection />
      <Root>
        <ErrorImg alt="error_img" src={noConnectionImg} />
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
      <FooterSection />
    </ThemeProvider>
  )
}
