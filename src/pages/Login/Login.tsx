import { FC } from 'react'
import {
  Container,
  GoogleButton,
  GoogleButtonTypo,
  UpperContainer,
  Root,
  UpperDescriptionTypo,
  LowerDescriptionTypo,
  LoginTypo,
  Footer,
  FooterItem,
} from './styled'
import { CredentialResponse, GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogo, HandIcon } from 'assets/SvgComponents'

export const LoginPage: FC = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <LoginContent />
    </GoogleOAuthProvider>
  )
}

const LoginContent: FC = () => {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res)
    },
    redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    scope: '',
    flow: 'auth-code',
    ux_mode: 'redirect',
  })

  return (
    <Root>
      <Container>
        <UpperContainer>
          <HandIcon />
          {/* <Logo /> */}
        </UpperContainer>
        <UpperDescriptionTypo>Planmate에 오신것을 환영합니다.</UpperDescriptionTypo>
        <LowerDescriptionTypo>플랜메이트는 여러분들의 성장을 돕는 플랫폼 입니다.</LowerDescriptionTypo>
        <LoginTypo>SNS 간편로그인</LoginTypo>
        <GoogleButton onClick={() => googleSocialLogin()}>
          <GoogleLogo />
          <GoogleButtonTypo>Google 계정으로 로그인</GoogleButtonTypo>
        </GoogleButton>
        <Footer>
          <FooterItem>이용약관</FooterItem>
          <FooterItem>개인정보처리방침</FooterItem>
          <FooterItem>이용관련건의</FooterItem>
        </Footer>
      </Container>
    </Root>
  )
}
