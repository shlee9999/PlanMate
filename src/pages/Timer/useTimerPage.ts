import { FindFixedDdayResponseProps, findFixedDday } from 'api/dday/findFixedDday'
import { useModal } from 'hooks'
import { useQuery } from 'react-query'
import { useNavigate, useLocation } from 'react-router-dom'
import { QueryKeys } from 'types'
import { dateUtils } from 'utils'
import { useEffect, useState } from 'react'
import { useTodoList, useTodayStats, useTimerEffects } from './hooks'
import { useTimer } from './hooks'

export const useTimerPage = () => {
  const { todoList, isTodoLoading } = useTodoList()
  const { data: fixedDDay } = useQuery<FindFixedDdayResponseProps>([QueryKeys.fixedDday], () => findFixedDday())
  const { todayStatsData, totalStudyTime, restTime, isStatsLoading } = useTodayStats()
  const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useModal()
  const { isOpen: isSuggestModalOpen, openModal: openSuggestModal, closeModal: closeSuggestModal } = useModal()
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const {
    startTimer: startBreakTimer,
    stopTimer: stopBreakTimer,
    time: breakTime,
    setDefaultTime: setDefaultBreakTime,
  } = useTimer({ defaultTime: 0 })

  const navigate = useNavigate()
  const location = useLocation()
  const onClickGreenTypo = () => navigate('/mypage')
  //! 백엔드 remainingDays 안맞아서 내 로직 사용
  const remainingDays = dateUtils.daysUntil(dateUtils.getDateProps(fixedDDay?.targetDate))
  useEffect(() => {
    //* 건의사항 작성 시 잘 전송되었다는 알림 모달
    if (location.state) openSuggestModal()
  }, [location.state])
  useTimerEffects({
    restTime,
    setDefaultBreakTime,
    startBreakTimer,
    stopBreakTimer,
    isTimerRunning,
    todayStatsData,
  })

  return {
    todoList,
    fixedDDay,
    remainingDays,
    onClickGreenTypo,
    breakTime,
    isStatsLoading,
    isAddModalOpen,
    isSuggestModalOpen,
    closeSuggestModal,
    closeAddModal,
    todayStatsData,
    openAddModal,
    isTodoLoading,
    stopBreakTimer,
    setIsTimerRunning,
    isTimerRunning,
  }
}
