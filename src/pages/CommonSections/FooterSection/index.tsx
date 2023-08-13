import { FC } from 'react'
import { ContentWrapper, NavigateTypo, RightContainer, Root } from './styled'
import { useNavigate } from 'react-router-dom'

const footerNavigate = [
  { typo: '이용약관', url: '/tos' },
  { typo: '개인정보 처리방침', url: 'privacy_policy' },
  { typo: '이용관련건의', url: 'suggest' },
  { typo: 'Contact Us', url: 'contact_us' },
]
export const FooterSection: FC = () => {
  const navigate = useNavigate()
  const onClickNavigateTypo = (url: string) => () => {
    navigate(url)
    console.log(url)
  }

  return (
    <Root>
      <ContentWrapper>
        <RightContainer>
          {footerNavigate.map((item, index) => (
            <NavigateTypo onClick={onClickNavigateTypo(item.url)} key={index}>
              {item.typo}
            </NavigateTypo>
          ))}
        </RightContainer>
      </ContentWrapper>
    </Root>
  )
}
