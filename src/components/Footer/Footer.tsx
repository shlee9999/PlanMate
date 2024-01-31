import { FC } from 'react'
import * as s from './styled'
import { useNavigate } from 'react-router-dom'

const footerNavigate = [
  { typo: '이용약관', url: '/tos' },
  { typo: '개인정보 처리방침', url: 'privacy_policy' },
  { typo: 'Contact Us', url: 'contact_us' },
]
export const Footer: FC = () => {
  const navigate = useNavigate()
  const onClickNavigateTypo = (url: string) => () => navigate(url)

  return (
    <s.FooterWrapper>
      <s.Footer>
        <s.RightContainer>
          {footerNavigate.map((item, index) => (
            <s.NavigateTypo onClick={onClickNavigateTypo(item.url)} key={index}>
              {item.typo}
            </s.NavigateTypo>
          ))}
          <s.EmailAddressWrapper>
            <s.StyledMessageIcon />
            <s.EmailAddress>planmate.foryou@gmail.com</s.EmailAddress>
          </s.EmailAddressWrapper>
          <s.InstagramAddressWrapper>
            <s.StyledInstagramIcon />
            <s.InstagramAddress>plan._.mate</s.InstagramAddress>
          </s.InstagramAddressWrapper>
        </s.RightContainer>
      </s.Footer>
    </s.FooterWrapper>
  )
}
