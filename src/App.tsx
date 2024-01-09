import { lightTheme } from 'theme'
import { FooterSection } from 'pages/CommonSections/FooterSection'
import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Root } from 'commonStyled'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'globalStyle'

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <HeaderSection />
      <Root>
        <Outlet />
      </Root>
      <FooterSection />
    </ThemeProvider>
  )
}
