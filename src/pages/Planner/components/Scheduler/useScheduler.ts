import { useState } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import { usePlannerData, useSelectModal, useMouseInteraction } from './hooks'

export const useScheduler = () => {
  const todayDateProps = dateUtils.getTodayDateProps()
  const { plannerData, isPlannerLoading } = usePlannerData()
  const [selectedDateProps, setSelectedDateProps] = useState<DateProps>(todayDateProps)
  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [modalType, setModalType] = useState<'ADD' | 'EDIT'>('ADD')
  const { isSelectModalOpen, openAddModal, openEditModal, closeModal, onExitComplete } = useSelectModal({
    setModalType,
    initializeSelectedCells: () => setSelectedCells([]),
  })
  const { onMouseDown, onMouseEnter, onMouseUp } = useMouseInteraction({
    selectedCells,
    setSelectedCells,
    openModal: modalType === 'ADD' ? openAddModal : openEditModal,
  })

  return {
    plannerData,
    isPlannerLoading,
    selectedDateProps,
    setSelectedDateProps,
    isSelectModalOpen,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    closeModal,
    onExitComplete,
    selectedCells,
    modalType,
    openEditModal,
    todayDateProps,
  }
}
