import { FC } from 'react'
import { ContentWrapper, NavigateTypo, RightContainer, Root } from './styled'

export const FooterSection: FC = () => {
  return (
    <Root>
      <ContentWrapper>
        <RightContainer>
          <NavigateTypo>이용약관</NavigateTypo>
          <NavigateTypo>개인정보 처리방침</NavigateTypo>
          <NavigateTypo>이용관련건의</NavigateTypo>
          <NavigateTypo>Contact Us</NavigateTypo>
        </RightContainer>
      </ContentWrapper>
    </Root>
  )
}
