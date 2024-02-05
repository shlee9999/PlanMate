import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'globalStyle'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Footer, Header } from 'components/'
import { lightTheme } from 'theme'
import { GoogleOAuthProvider } from '@react-oauth/google'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
})
export default function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Header />
          <Outlet />
          <Footer />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  )
}
