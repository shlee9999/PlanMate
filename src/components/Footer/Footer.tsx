import { FOOTER_NAV } from 'constants/footerNavigate'
import * as s from './styled'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { INSTAGRAM_URL } from 'constants/url'
import { CopyToClipboard } from 'react-copy-to-clipboard/src'
import { useModal } from 'hooks'
import { CopyAlertModal } from './CopyAlertModal/CopyAlertModal'

export const Footer: FC = () => {
  const navigate = useNavigate()
  const onClickNavigateTypo = (url: string) => () => {
    if (url.slice(0, 5) === 'https') window.open(url, '_blank')
    else navigate(url)
  }
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <s.FooterWrapper>
      <s.Footer>
        <s.RightContainer>
          {FOOTER_NAV.map((item, index) => (
            <s.NavigateTypo onClick={onClickNavigateTypo(item.url)} key={index}>
              {item.typo}
            </s.NavigateTypo>
          ))}
          <CopyToClipboard text="planmate.foryou@gmail.com" onCopy={openModal}>
            <s.EmailAddress>
              planmate.foryou@gmail.com
              <CopyAlertModal isOpen={isOpen} closeModal={closeModal} />
            </s.EmailAddress>
          </CopyToClipboard>
          <s.InstagramAddress onClick={onClickNavigateTypo(INSTAGRAM_URL)}>plan._.mate</s.InstagramAddress>
        </s.RightContainer>
      </s.Footer>
    </s.FooterWrapper>
  )
}
