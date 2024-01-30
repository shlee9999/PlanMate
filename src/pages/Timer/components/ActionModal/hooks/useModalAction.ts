import { defaultColor } from 'constants/color'
import { useEffect } from 'react'

type useModalActionProps = {
  setValue: (key: string, value: string) => void
  setIsConfirmed: (state: boolean) => void
  setSubjectColor: (color: string) => void
  inputFocus: (key: string) => void
  isConfirmed: boolean
  type: 'ADD' | 'EDIT'
  isOpen: boolean
  name: string
}

export const useModalAction = ({
  setValue,
  setIsConfirmed,
  setSubjectColor,
  inputFocus,
  type,
  isConfirmed,
  isOpen,
  name,
}: useModalActionProps) => {
  const onExitComplete = () => {
    if (!isConfirmed) return
    setValue('ADD', '')
    setIsConfirmed(false)
  }
  useEffect(() => {
    if (type === 'ADD') {
      setSubjectColor(defaultColor)
      inputFocus('ADD')
    }
    if (type === 'EDIT') {
      setValue('EDIT', name || '')
      inputFocus('EDIT')
    }
  }, [isOpen])

  return { onExitComplete }
}
