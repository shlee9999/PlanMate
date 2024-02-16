import { useEffect, useRef } from 'react'

type useDetectClickOutsideProps = {
  isOpen: boolean
  closeModal: () => void
}

export const useDetectClickOutside = ({ isOpen, closeModal }: useDetectClickOutsideProps) => {
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !e.composedPath().includes(ref.current)) {
        closeModal()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  return ref
}
