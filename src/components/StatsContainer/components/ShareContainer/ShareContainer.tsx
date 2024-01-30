import * as s from './styled'
import { FC, useState } from 'react'
import { ShareIcon, UrlIcon, KakaoIcon, InstagramIcon } from 'assets/SvgComponents'
import { AnimatePresence, Variants } from 'framer-motion'

export const ShareContainer: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)
  const ShareButtonVar: Variants = {
    initial: {},
    animate: {},
    hover: {
      scale: 1.05,
    },
  }
  const SNSContainerVar: Variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        delayChildren: 0.21,
        staggerChildren: 0.02,
      },
    },
    exit: {
      scale: 0,
    },
  }
  const SNSVar: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.1,
      },
    },
  }
  return (
    <s.ShareContainer initial="initial" animate="animate">
      <s.ShareButton onClick={toggleOpen} variants={ShareButtonVar}>
        <ShareIcon />
        공유하기
      </s.ShareButton>
      <AnimatePresence>
        {isOpen && (
          <s.SNSItems variants={SNSContainerVar} initial="initial" animate="animate" exit="exit">
            <s.SNSItem variants={SNSVar}>
              <UrlIcon />
              <s.SNSLabel>URL</s.SNSLabel>
            </s.SNSItem>
            <s.SNSItem variants={SNSVar}>
              <KakaoIcon />
              <s.SNSLabel>카카오톡</s.SNSLabel>
            </s.SNSItem>
            <s.SNSItem variants={SNSVar}>
              <InstagramIcon />
              <s.SNSLabel>인스타</s.SNSLabel>
            </s.SNSItem>
          </s.SNSItems>
        )}
      </AnimatePresence>
    </s.ShareContainer>
  )
}
