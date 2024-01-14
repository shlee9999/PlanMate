import { lightTheme } from 'theme'
import { FooterSection } from 'pages/CommonSections/FooterSection'
import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'globalStyle'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <HeaderSection />
        <Outlet />
        <FooterSection />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
