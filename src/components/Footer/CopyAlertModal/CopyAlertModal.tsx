import { FC, useEffect } from 'react'
import * as s from './styled'
import { AnimatePresence } from 'framer-motion'

type CopyAlertModalProps = {
  isOpen: boolean
  closeModal: () => void
}

export const CopyAlertModal: FC<CopyAlertModalProps> = ({ isOpen, closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal()
    }, 1000)
    return () => clearTimeout(timeout)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <s.CopyAlertModal variants={s.CopyAlertModalVar} initial="initial" animate="animate" exit="exit">
          클립보드에 복사되었어요!
        </s.CopyAlertModal>
      )}
    </AnimatePresence>
  )
}
