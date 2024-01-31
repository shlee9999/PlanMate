import { RootState } from 'modules'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const useModal = (initialState = false) => {
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const [isOpen, setIsOpen] = useState(initialState)
  const openModal = () => !isNavBlocked && setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const toggleModal = () => setIsOpen((prev) => !prev)
  return { isOpen, openModal, closeModal, toggleModal }
}
