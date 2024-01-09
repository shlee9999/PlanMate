import React, { useEffect, useRef, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Root,
  ModalExitButton,
  ModalFooter,
  InputWrapper,
  ModalTitle,
  Input,
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
import { updateProp } from 'modules/selectedInfo'
import { defaultColor } from 'constants/color'

export const SelectModal = ({ closeModal, title }: { closeModal: () => void; title: string }) => {
  //입력값과 색상 상태 관리
  const { startDate, endDate, text, bgColor, id } = useSelector((state: RootState) => state.selectedInfo)
  const year = startDate.getFullYear()
  const month = startDate.getMonth()
  const date = startDate.getDate()

  const [inputValue, setInputValue] = useState<string>(title.slice(-2) === '수정' ? text : '')
  const [subjectColor, setSubjectColor] = useState<string>(title.slice(-2) === '수정' ? bgColor : defaultColor)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const dispatch = useDispatch()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const handleAddConfirm = () => {
    if (inputValue === '') return
    setInputValue('')
    if (title.slice(-2) === '추가')
      dispatch(
        addAppoint({
          text: inputValue,
          startDate: new Date(year, month, date, startDate.getHours()),
          endDate: new Date(year, month, date, endDate.getHours()),
          bgColor: subjectColor,
          id: new Date().getTime(),
        })
      )
    else {
      dispatch(
        updateAppoint({
          text: inputValue,
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
    closeModal()
  }

  useEffect(() => {
    inputRef.current.focus()
    setSubjectColor(defaultColor)
  }, [])
  useEffect(() => {
    dispatch(updateProp('bgColor', subjectColor))
  }, [subjectColor])

  return (
    <ModalWrapper onClick={closeModalAll}>
      <Root onClick={handleModalClick}>
        <ModalTitle>{title}</ModalTitle>
        <Title>{useFormattedDate(new Date(year, month, date))}</Title>
        <ModalExitButton onClick={closeModalAll} />
        <InputWrapper>
          <ButtonTypoWrapper>
            일정명
            <Input placeholder={'일정명을 입력해주세요'} onChange={onChange} value={inputValue} ref={inputRef} />
          </ButtonTypoWrapper>
          <ColorSelectWrapper>
            <ColorSelectTypo>색상선택</ColorSelectTypo>
            <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
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
}
