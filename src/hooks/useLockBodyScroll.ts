import { useEffect, useLayoutEffect } from 'react'

export const useLockBodyScroll = ({ isOpen }) => {
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  return {}
}
