import { footerNavigate } from 'constants/footerNavigate'
import * as s from './styled'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { INSTAGRAM_URL } from 'constants/url'

export const Footer: FC = () => {
  const navigate = useNavigate()
  const onClickNavigateTypo = (url: string) => () => {
    if (url.slice(0, 5) === 'https') window.open(url, '_blank')
    else navigate(url)
  }

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
            <s.InstagramAddress onClick={onClickNavigateTypo(INSTAGRAM_URL)}>plan._.mate</s.InstagramAddress>
          </s.InstagramAddressWrapper>
        </s.RightContainer>
      </s.Footer>
    </s.FooterWrapper>
  )
}
