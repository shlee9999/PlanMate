import { FC } from 'react'
import * as s from './styled'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { HandIcon } from 'assets/SvgComponents'
import { Logo } from 'assets/Logo'
import { LoginResponseProps, login } from 'api/login/login'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUserAuthInfo } from 'modules/userAuthInfo'
export const LoginPage: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <s.LoginPage>
      <s.Container>
        <s.UpperContainer>
          <HandIcon />
          <Logo />
        </s.UpperContainer>
        <s.UpperDescriptionTypo>Planmate에 오신것을 환영합니다.</s.UpperDescriptionTypo>
        <s.LowerDescriptionTypo>플랜메이트는 여러분들의 성장을 돕는 플랫폼 입니다.</s.LowerDescriptionTypo>
        <s.LoginTypo>SNS 간편로그인</s.LoginTypo>
        <GoogleLogin
          onSuccess={(credentialResponse: CredentialResponse) => {
            const info = jwtDecode(credentialResponse.credential) as any
            login({ email: info.email, picture: info.picture, name: info.name }).then((res: LoginResponseProps) => {
              //* 로그인 성공
              localStorage.setItem('userAuthInfo', JSON.stringify(res)) //최초 저장
              dispatch(changeUserAuthInfo(res))
              navigate('/timer')
              window.location.reload()
            })
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
        <s.Footer>
          <s.FooterItem>이용약관</s.FooterItem>
          <s.FooterItem>개인정보처리방침</s.FooterItem>
          <s.FooterItem>이용관련건의</s.FooterItem>
        </s.Footer>
      </s.Container>
    </s.LoginPage>
  )
}
