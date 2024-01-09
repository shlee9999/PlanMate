import { lightTheme } from 'theme'
import { FooterSection } from 'pages/CommonSections/FooterSection'
import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <HeaderSection />
      <Root>
        <Outlet />
      </Root>
      <FooterSection />
    </ThemeProvider>
  )
}
