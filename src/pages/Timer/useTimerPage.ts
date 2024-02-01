import { FindFixedDdayResponseProps, findFixedDday } from 'api/dday/findFixedDday'
import { useModal } from 'hooks'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'
import { dateUtils } from 'utils'
import { useState } from 'react'
import { useTodoList, useTodayStats } from './hooks'

export const useTimerPage = () => {
  const { todoList, isTodoLoading } = useTodoList()
  const { data: fixedDDay } = useQuery<FindFixedDdayResponseProps>([QueryKeys.fixedDday], () => findFixedDday())
  const { todayStatsData, isStatsLoading } = useTodayStats()
  const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useModal()
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const navigate = useNavigate()
  const onClickGreenTypo = () => navigate('/mypage')
  //! 백엔드 remainingDays 안맞아서 내 로직 사용
  const remainingDays = dateUtils.daysUntil(dateUtils.getDateProps(fixedDDay?.targetDate))

  return {
    todoList,
    fixedDDay,
    remainingDays,
    onClickGreenTypo,
    isStatsLoading,
    isAddModalOpen,
    closeAddModal,
    todayStatsData,
    openAddModal,
    isTodoLoading,
    setIsTimerRunning,
    isTimerRunning,
  }
}
