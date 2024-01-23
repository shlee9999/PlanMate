import { FC, useEffect, useState } from 'react'
import * as s from './styled'
import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

type TooltipProps = {
  className?: string
  closeTooltip: () => void
  targetRef: React.RefObject<HTMLElement>
}

export const Tooltip: FC<TooltipProps> = ({ className, closeTooltip, targetRef }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top - 45,
        left: rect.left + 3,
      })
    }
  }, [targetRef])
  return createPortal(
    <AnimatePresence onExitComplete={closeTooltip}>
      {isOpen && (
        <s.TooltipRoot
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={className}
          style={{ position: 'absolute', top: position.top, left: position.left }}
        >
          미래로는 갈 수 없어요!
        </s.TooltipRoot>
      )}
    </AnimatePresence>,
    document.body
  )
}
