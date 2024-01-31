import { useLockBodyScroll } from 'hooks'
import { updateProp } from 'modules/selectedInfo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

type useInitializationProps = {
  isOpen: boolean
  setScheduleNameInput: (scheduleName: string) => void
  scheduleNameInputFocus: () => void
  initializeSubjectColor: () => void
  subjectColor: string
  scheduleName: string
}

export const useInitialization = ({
  isOpen,
  setScheduleNameInput,
  scheduleNameInputFocus,
  initializeSubjectColor,
  subjectColor,
  scheduleName,
}: useInitializationProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    setScheduleNameInput(scheduleName)
    scheduleNameInputFocus()
    initializeSubjectColor()
  }, [isOpen])
  useEffect(() => {
    dispatch(updateProp('colorHex', subjectColor))
  }, [subjectColor])
  useLockBodyScroll({ isOpen })
}
