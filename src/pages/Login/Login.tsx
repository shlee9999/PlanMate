import { FC } from 'react'
import * as s from './styled'
import { CredentialResponse, GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogo, HandIcon } from 'assets/SvgComponents'
import { login } from 'api/login/login'

export const LoginPage: FC = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <LoginContent />
    </GoogleOAuthProvider>
  )
}

const LoginContent: FC = () => {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      login({ code }).then((res) => console.log(res))
    },
    flow: 'auth-code',
    scope: 'email profile',
    onError: (errorResponse) => {
      console.error(errorResponse)
    },
  })

  return (
    <s.LoginPage>
      <s.Container>
        <s.UpperContainer>
          <HandIcon />
          {/* <Logo /> */}
        </s.UpperContainer>
        <s.UpperDescriptionTypo>Planmate에 오신것을 환영합니다.</s.UpperDescriptionTypo>
        <s.LowerDescriptionTypo>플랜메이트는 여러분들의 성장을 돕는 플랫폼 입니다.</s.LowerDescriptionTypo>
        <s.LoginTypo>SNS 간편로그인</s.LoginTypo>
        <s.GoogleButton onClick={() => googleSocialLogin()}>
          <GoogleLogo />
          <s.GoogleButtonTypo>Google 계정으로 로그인</s.GoogleButtonTypo>
        </s.GoogleButton>
        <s.Footer>
          <s.FooterItem>이용약관</s.FooterItem>
          <s.FooterItem>개인정보처리방침</s.FooterItem>
          <s.FooterItem>이용관련건의</s.FooterItem>
        </s.Footer>
      </s.Container>
    </s.LoginPage>
  )
}
