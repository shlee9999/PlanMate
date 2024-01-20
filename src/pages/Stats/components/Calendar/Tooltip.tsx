import { FC, useEffect, useState } from 'react'
import * as s from './styled'
import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

type TooltipProps = {
  className?: string
  isTriggered: boolean
  closeTooltip: () => void
}

export const Tooltip: FC<TooltipProps> = ({ className, closeTooltip }) => {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <AnimatePresence onExitComplete={closeTooltip}>
      {isOpen &&
        createPortal(
          <s.TooltipRoot
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
          >
            미래로는 갈 수 없어요!
          </s.TooltipRoot>,
          document.getElementById('portal')
        )}
    </AnimatePresence>
  )
}
