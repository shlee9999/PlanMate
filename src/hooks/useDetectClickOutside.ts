import { useEffect, useRef } from 'react'

type useDetectClickOutsideProps = {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

export const useDetectClickOutside = ({ isOpen, setIsOpen }: useDetectClickOutsideProps) => {
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !e.composedPath().includes(ref.current)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  return ref
}
