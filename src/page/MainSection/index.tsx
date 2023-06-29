import { FC, useState } from 'react'
import { Root, AddButton } from './styled'
import SubjectModal from 'components/Modals/Modal/index'

import { tabList, useFormattedDate } from 'utils/helper'
import { useSelector } from 'react-redux'
import { Globals } from 'types'
import TimerWidget from 'components/TimerWidget'

type MainSectionProps = {}

const MainSection: FC<MainSectionProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const currentTab = useSelector((state: Globals) => state.currentTab)
  const formattedDate: string = useFormattedDate()

  const openSubjectModal = (): void => {
    setModalTitle('과목 추가')
    setIsModalOpen(true)
  }
  const openExerciseModal = (): void => {
    setModalTitle('종목 추가')
    setIsModalOpen(true)
  }
  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  return (
    <Root>
      <p>{formattedDate}</p>
      <TimerWidget title="Study" />
      <div className={tabList[currentTab].wrapper}>{tabList[currentTab].component}</div>
      {currentTab === 0 && <AddButton onClick={openSubjectModal}>과목 추가</AddButton>}
      {currentTab === 0 && <AddButton onClick={openExerciseModal}>종목 추가</AddButton>}
      <SubjectModal todo={null} title={modalTitle} isModalOpen={isModalOpen} closeModal={closeModal}></SubjectModal>
    </Root>
  )
}

export default MainSection
