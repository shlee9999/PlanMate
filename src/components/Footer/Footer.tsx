import { FC } from 'react'
import * as s from './styled'
import { useNavigate } from 'react-router-dom'

const footerNavigate = [
  { typo: '이용약관', url: '/tos' },
  { typo: '개인정보 처리방침', url: 'privacy_policy' },
  { typo: '이용관련건의', url: 'suggest' },
  { typo: 'Contact Us', url: 'contact_us' },
]
export const Footer: FC = () => {
  const navigate = useNavigate()
  const onClickNavigateTypo = (url: string) => () => {
    navigate(url)
    console.log(url)
  }

  return (
    <s.Footer>
      <s.ContentWrapper>
        <s.RightContainer>
          {footerNavigate.map((item, index) => (
            <s.NavigateTypo onClick={onClickNavigateTypo(item.url)} key={index}>
              {item.typo}
            </s.NavigateTypo>
          ))}
        </s.RightContainer>
      </s.ContentWrapper>
    </s.Footer>
  )
}
