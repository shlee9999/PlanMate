import React, { useEffect, useRef, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import {
  Root,
  ModalExitButton,
  ModalFooter,
  InputWrapper,
  ColorPickerButton,
  ModalTitle,
  NameInput,
  ButtonTypoWrapper,
  TimeSelectWrapper,
  ColorSelectWrapper,
} from '../styled'

import { TodoPlans } from 'types'
import { generateId } from 'utils/helper'

import { addPlan } from 'modules/todoplans'
import { CategorySelect } from './CategorySelect'
import { TimeSelect } from './TimeSelect'
import { DaySelect } from './DaySelect'
import { ConfirmButton, ExitButton, ModalWrapper } from 'components/common/commonStyle'
import { ColorPicker } from 'components/common/ColorPickerModal/ColorPicker'

const DefaultColor: string = '#ff0000' as const

export const AddModal = ({
  isModalOpen,
  closeModal,
  title,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
}) => {
  //입력값과 색상 상태 관리
  const [inputTitle, setInputTitle] = useState<string>('')
  const [subjectColor, setSubjectColor] = useState<string>(DefaultColor)
  const [subjectDay, setSubjectDay] = useState<string>('')
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useDispatch()
  const closeColorPickerModal = () => {
    setIsColorPickerModalOpen(false)
    inputRef.current?.focus()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  //색상 선택 버튼 클릭 시 컬러피커 모달열기
  // const handleOnClickColorButton = () => {
  //   setIsColorPickerModalOpen(true)
  // }

  //일정명 변경 시 상태 업데이트
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputTitle(e.target.value)
  // }

  //키보드 입력처리
  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      //확인 버튼 클릭 시 새로운 항목 추가
      handleAddConfirm()
    }
  }

  //요일 버튼 입력처리
  const assignSubjectDay = (color: string) => {
    setSubjectDay(color)
  }
  //시간 버튼 입력처리
  const [selectedBeginHour, setselectedBeginHour] = useState<number>(0)
  const [selectedBeginMinute, setselectedBeginMinute] = useState<number>(0)

  const [selectedFinishHour, setselectedFinishHour] = useState<number>(0)
  const [selectedFinishMinute, setselectedFinishMinute] = useState<number>(0)

  const assignBeginHour = (fromHour: number) => {
    setselectedBeginHour(fromHour)
  }

  const assignBeginMinute = (fromMinute: number) => {
    setselectedBeginMinute(fromMinute)
  }

  const assignFinishHour = (fromHour: number) => {
    setselectedFinishHour(fromHour)
  }

  const assignFinishMinute = (fromMinute: number) => {
    setselectedFinishMinute(fromMinute)
  }

  // const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   if (typeof e === 'number') {
  //     setSelectedHour(e.target.value)
  //   }
  // }

  // const handleMinuteChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   if (typeof e === 'number') {
  //     setSelectedMinute(e.target.value)
  //   }
  // }

  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const handleAddConfirm = () => {
    if (inputTitle === '') return
    const newTodoPlans: TodoPlans = {
      title: inputTitle,
      color: subjectColor,
      // category: title === '과목' ? 'study' : 'exercise',
      day: subjectDay,
      begin_hour: selectedBeginHour,
      begin_minute: selectedBeginMinute,
      finish_hour: selectedFinishHour,
      finish_minute: selectedFinishMinute,
      id: generateId(),
    }
    dispatch(addPlan(newTodoPlans))
    setInputTitle('')
    closeModalAll()
  }

  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const closeModalAll = () => {
    if (isColorPickerModalOpen) closeColorPickerModal()
    closeModal()
  }

  useEffect(() => {
    if (!inputRef || !inputRef.current) return
    if (isModalOpen) {
      inputRef.current.focus()
      setSubjectColor(DefaultColor)
    }
  }, [isModalOpen])

  if (isModalOpen)
    return (
      <ModalWrapper onClick={closeModalAll}>
        <Root onClick={handleModalClick}>
          <ModalTitle>일정추가</ModalTitle>
          <ModalExitButton onClick={closeModalAll} />
          <InputWrapper>
            <ButtonTypoWrapper>
              분류
              <CategorySelect />
            </ButtonTypoWrapper>
            <ButtonTypoWrapper>
              일정명
              <NameInput placeholder={'일정명을 입력해주세요'} onChange={onChange} ref={inputRef} />
            </ButtonTypoWrapper>
            {/* <ColorSelectWrapper>
              색상선택
              <ColorSelect assignSubjectColor={assignSubjectColor} />
            </ColorSelectWrapper> */}
            색상선택
            <ColorPicker assignSubjectColor={assignSubjectColor} />
            <ButtonTypoWrapper>
              요일
              <DaySelect assignSubjectDay={assignSubjectDay}></DaySelect>
            </ButtonTypoWrapper>
            <ButtonTypoWrapper>
              시간
              <TimeSelectWrapper>
                <TimeSelect assignHour={setselectedBeginHour} assignMinute={setselectedBeginMinute} set={'부터'} />
                <TimeSelect assignHour={setselectedFinishHour} assignMinute={setselectedFinishMinute} set={'까지'} />
                {/* <TimeSelect assignFromHour={assignFromHour} assignFromMinute={assignFromMinute} set={'까지'} /> */}
              </TimeSelectWrapper>
            </ButtonTypoWrapper>
          </InputWrapper>

          <ModalFooter>
            <ExitButton onClick={closeModalAll}>취소</ExitButton>
            <ConfirmButton onClick={handleAddConfirm}>확인</ConfirmButton>
          </ModalFooter>
        </Root>
      </ModalWrapper>
    )

  return null
}
