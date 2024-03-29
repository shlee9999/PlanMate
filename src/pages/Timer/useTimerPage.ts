import { FindFixedDdayResponseProps, findFixedDday } from 'api/dday/findFixedDday'
import { useModal } from 'hooks'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'

export const useTimerPage = () => {
  const { data: fixedDDay } = useQuery<FindFixedDdayResponseProps>([QueryKeys.fixedDday], () => findFixedDday())
  const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useModal()
  const navigate = useNavigate()
  const onClickGreenTypo = () => navigate('/mypage')
  //! 백엔드 remainingDays 안맞아서 내 로직 사  용
  const remainingDays = fixedDDay?.remainingDays

  return {
    fixedDDay,
    remainingDays,
    onClickGreenTypo,
    isAddModalOpen,
    closeAddModal,
    openAddModal,
  }
}
