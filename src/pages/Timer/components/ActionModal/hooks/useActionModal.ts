import { defaultColor } from 'constants/color'
import { useForm } from 'hooks'
import { useState } from 'react'
import { useActionSubmit } from './useActionSubmit'
import { useModalAction } from './useModalAction'
import { TodoItemType } from 'types'
type UseActionModalProps = {
  isOpen: boolean
  closeModal: () => void
  todo?: TodoItemType
  closeEllipsisModal?: () => void
  type: 'ADD' | 'EDIT'
}
type IForm = {
  ADD: string
  EDIT: string
}
export const useActionModal = ({ isOpen, closeModal, todo, closeEllipsisModal, type }: UseActionModalProps) => {
  const { registerInput, handleSubmit, setValue, inputFocus } = useForm<IForm>()
  const [subjectColor, setSubjectColor] = useState(todo?.colorHex || defaultColor)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const onKeyDown = (e: React.KeyboardEvent) => e.nativeEvent.key === 'Escape' && closeModalAll() // esc 단축키
  const closeModalAll = () => type === 'EDIT' && closeEllipsisModal()
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()
  const { onSubmit } = useActionSubmit({
    type,
    subjectId: todo?.subjectId,
    setIsConfirmed,
    closeModal,
    closeModalAll,
    subjectColor,
  })
  const { onExitComplete } = useModalAction({
    setValue,
    setIsConfirmed,
    setSubjectColor,
    inputFocus,
    isConfirmed,
    type,
    isOpen,
    name: todo?.name,
  })

  return {
    registerInput,
    handleSubmit,
    onKeyDown,
    onClickModal,
    onSubmit,
    onExitComplete,
    setSubjectColor,
    subjectColor,
  }
}
