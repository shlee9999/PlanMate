import { FC, useEffect } from 'react'
import * as s from './styled'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { HandIcon } from 'assets/SvgComponents'
import { LoginResponseProps, login } from 'api/login/login'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserAuthInfo } from 'modules/userAuthInfo'
import LogoSvg from 'assets/images/logo.svg'
import { FOOTER_NAV } from 'constants/footerNavigate'
import { RootState } from 'modules'
export const LoginPage: FC = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (userAuthInfo.nickname) navigate(-1)
  }, [])
  return (
    <s.LoginPage>
      <s.Container>
        <s.LogoContainer>
          <HandIcon />
          <s.Logo src={LogoSvg} />
        </s.LogoContainer>
        <s.WelcomeTypo>PlanMate에 오신것을 환영합니다.</s.WelcomeTypo>
        <s.DescriptionTypo>플랜메이트는 여러분들의 성장을 돕는 플랫폼 입니다.</s.DescriptionTypo>
        <s.LoginTypo>Google 계정으로 로그인</s.LoginTypo>
        <GoogleLogin
          width={240}
          onSuccess={(credentialResponse: CredentialResponse) => {
            const info = jwtDecode(credentialResponse.credential) as any
            login({ email: info.email, picture: info.picture, name: info.name }).then((res: LoginResponseProps) => {
              //* 로그인 성공
              dispatch(changeUserAuthInfo(res))
              navigate('/timer')
            })
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
        <s.Footer>
          <s.FooterItem onClick={() => navigate(FOOTER_NAV[0].url)}>이용약관</s.FooterItem>
          <s.FooterItem onClick={() => navigate(FOOTER_NAV[1].url)}>개인정보처리방침</s.FooterItem>
        </s.Footer>
      </s.Container>
    </s.LoginPage>
  )
}
