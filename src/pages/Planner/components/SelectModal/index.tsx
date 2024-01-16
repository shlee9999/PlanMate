import React, { useEffect, useRef, useState } from 'react'
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
import { ColorPicker } from 'components/ColorPickerModal/ColorPicker'
import { addAppoint, updateAppoint } from 'modules/appointments'
import { RootState } from 'modules'
import { useFormattedDate } from 'utils/helper'
import { updateProp } from 'modules/selectedInfo'
import { defaultColor } from 'constants/color'
import { ModalWrapper, WhiteButton, GreenButton, ModalWrapperVar } from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import useAddAppointMutation from './hooks/useAddAppointMutation'
import useEditAppointMutation from './hooks/useEditAppointMutation'

export const SelectModal = ({
  closeModal,
  title,
  isOpen,
  onExitComplete,
}: {
  closeModal: () => void
  title: string
  isOpen: boolean
  onExitComplete: () => void
}) => {
  //입력값과 색상 상태 관리
  const { startAt, endAt, scheduleName, colorHex, plannerId, day } = useSelector(
    (state: RootState) => state.selectedInfo
  )
  const [inputValue, setInputValue] = useState<string>(title.slice(-2) === '수정' ? scheduleName : '')
  const [subjectColor, setSubjectColor] = useState<string>(title.slice(-2) === '수정' ? colorHex : defaultColor)
  const inputRef = useRef<HTMLInputElement>()
  const dispatch = useDispatch()
  const mutateAddAppoint = useAddAppointMutation({ colorHex, startAt, day, endAt, scheduleName: inputValue })
  const mutateEditAppoint = useEditAppointMutation({
    colorHex,
    day,
    startAt,
    endAt,
    scheduleName: inputValue,
    plannerId,
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const onClickConfirm = () => {
    if (inputValue === '') return
    setInputValue('')
    if (title.slice(-2) === '추가') {
      dispatch(
        addAppoint({
          scheduleName: inputValue,
          startAt,
          endAt,
          colorHex,
          plannerId: new Date().getTime(),
          day,
        })
      )
      mutateAddAppoint()
    } else {
      // 수정
      dispatch(
        updateAppoint({
          scheduleName: inputValue,
          startAt: startAt,
          endAt: endAt,
          colorHex: colorHex,
          plannerId: plannerId,
          day,
        })
      )
      mutateEditAppoint(plannerId)
    }
    closeModal()
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      onClickConfirm()
    }
  }
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    inputRef?.current?.focus()
    setSubjectColor(defaultColor)
  }, [isOpen])

  useEffect(() => {
    dispatch(updateProp('colorHex', subjectColor))
  }, [subjectColor])

  useEffect(() => {
    setInputValue(scheduleName)
  }, [scheduleName])
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && (
        <ModalWrapper onClick={closeModal} variants={ModalWrapperVar} initial="initial" animate="visible" exit="exit">
          <Root onClick={handleModalClick}>
            <ModalTitle>{title}</ModalTitle>
            <Title>{useFormattedDate(day)}</Title>
            <ModalExitButton onClick={closeModal} />
            <InputWrapper>
              <ButtonTypoWrapper>
                일정명
                <Input
                  placeholder={'일정명을 입력해주세요'}
                  onChange={onChange}
                  value={inputValue}
                  ref={inputRef}
                  onKeyDown={onKeyDown}
                />
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
                </TimeSelectWrapper>
              </ButtonTypoWrapper>
            </InputWrapper>
            <ModalFooter>
              <WhiteButton onClick={closeModal}>취소</WhiteButton>
              <GreenButton onClick={onClickConfirm}>확인</GreenButton>
            </ModalFooter>
          </Root>
        </ModalWrapper>
      )}
    </AnimatePresence>
  )
}
