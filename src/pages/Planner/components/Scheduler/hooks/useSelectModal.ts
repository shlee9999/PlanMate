import { defaultColor } from 'constants/color'
import { useModal } from 'hooks'
import { updateInfo } from 'modules/selectedInfo'
import { useDispatch } from 'react-redux'
import { dateUtils } from 'utils'

type useSelectModalProps = {
  setModalType: (type: 'ADD' | 'EDIT') => void
  initializeSelectedCells: () => void
}

export const useSelectModal = ({ setModalType, initializeSelectedCells }: useSelectModalProps) => {
  const dispatch = useDispatch()
  const { isOpen: isSelectModalOpen, closeModal: closeSelectModal, openModal: openSelectModal } = useModal()
  const openAddModal = () => {
    setModalType('ADD')
    openSelectModal()
  }
  const openEditModal = () => {
    setModalType('EDIT')
    openSelectModal()
  }
  const closeModal = () => {
    closeSelectModal()
    initializeSelectedCells()
  }
  const onExitComplete = () => {
    // modal 종료 애니메이션 대기
    dispatch(
      updateInfo({
        startAt: '00',
        endAt: '00',
        scheduleName: '',
        colorHex: defaultColor,
        plannerId: new Date().getTime(),
        day: dateUtils.getYYYYMMDD(new Date()),
      })
    )
    setModalType('ADD')
  }
  return { isSelectModalOpen, openAddModal, openEditModal, closeModal, onExitComplete }
}
