import React, { useEffect, useRef, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Root,
  ModalExitButton,
  ModalFooter,
  InputWrapper,
  ModalTitle,
  NameInput,
  ButtonTypoWrapper,
  TimeSelectWrapper,
  ColorSelectWrapper,
  Title,
  ColorSelectTypo,
} from './styled'

import { TimeSelect } from './TimeSelect'
import { DaySelect } from './DaySelect'
import { GreenButton, WhiteButton, ModalWrapper } from 'components/common/commonStyle'
import { ColorPicker } from 'components/common/ColorPickerModal/ColorPicker'
import { addAppoint, updateAppoint } from 'modules/appointments'

import { RootState } from 'modules'
import { useFormattedDate } from 'utils/helper'
import { updateInfo, updateProp } from 'modules/selectedInfo'

const DefaultColor: string = '#ff0000' as const

export const SelectModal = ({
  isModalOpen,
  closeModal,
  title,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
}) => {
  //입력값과 색상 상태 관리
  const { startDate, endDate, text, bgColor, id } = useSelector((state: RootState) => state.selectedInfo)

  const year = startDate.getFullYear()
  const month = startDate.getMonth() - 1
  const date = startDate.getDate()

  const [inputTitle, setInputTitle] = useState<string>('')
  const [subjectColor, setSubjectColor] = useState<string>(DefaultColor)

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

  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const handleAddConfirm = () => {
    if (inputTitle === '') return
    setInputTitle('')
    if (title.slice(-2) === '추가')
      dispatch(
        addAppoint({
          text: inputTitle,
          startDate: new Date(year, month, date, startDate.getHours()),
          endDate: new Date(year, month, date, endDate.getHours()),
          bgColor: subjectColor,
          id: new Date().getTime(),
        })
      )
    else {
      dispatch(
        updateAppoint({
          text: inputTitle,
          startDate,
          endDate,
          bgColor,
          id,
        })
      )
    }
    closeModalAll()
  }
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const closeModalAll = () => {
    if (isColorPickerModalOpen) closeColorPickerModal()
    closeModal()
  }
  const onClickColor = (color: string) => (e: React.MouseEvent) => {
    dispatch(updateProp('bgColor', color))
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
          <ModalTitle>{title}</ModalTitle>
          <Title>{useFormattedDate(new Date(year, month, date))}</Title>
          <ModalExitButton onClick={closeModalAll} />
          <InputWrapper>
            <ButtonTypoWrapper>
              일정명
              <NameInput placeholder={'일정명을 입력해주세요'} onChange={onChange} ref={inputRef} defaultValue={text} />
            </ButtonTypoWrapper>
            <ColorSelectWrapper>
              <ColorSelectTypo>색상선택</ColorSelectTypo>
              <ColorPicker
                assignSubjectColor={assignSubjectColor}
                defaultColor={subjectColor}
                onClickButton={onClickColor}
              />
            </ColorSelectWrapper>
            {/* <ButtonTypoWrapper>
              요일
              <DaySelect assignSubjectDay={}></DaySelect>
            </ButtonTypoWrapper> */}
            <ButtonTypoWrapper>
              시간
              <TimeSelectWrapper>
                <TimeSelect set={'부터'} />
                <TimeSelect set={'까지'} />
                {/* <TimeSelect assignFromHour={assignFromHour} assignFromMinute={assignFromMinute} set={'까지'} /> */}
              </TimeSelectWrapper>
            </ButtonTypoWrapper>
          </InputWrapper>
          <ModalFooter>
            <WhiteButton onClick={closeModalAll}>취소</WhiteButton>
            <GreenButton onClick={handleAddConfirm}>확인</GreenButton>
          </ModalFooter>
        </Root>
      </ModalWrapper>
    )

  return null
}
