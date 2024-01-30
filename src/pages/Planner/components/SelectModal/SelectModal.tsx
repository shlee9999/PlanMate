import * as s from './styled'
import * as cs from 'commonStyled'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TimeSelector } from '.'
import { ColorPicker } from 'components/'
import { RootState } from 'modules'
import { dateUtils } from 'utils'
import { defaultColor } from 'constants/color'
import { AnimatePresence } from 'framer-motion'
import { useForm } from 'hooks'
import { PlannerType } from 'api/types'
import { MAX_APPOINT_NAME_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useSubmit, useInitialization } from './hooks'

type SelectModalProps = {
  closeModal: () => void
  isOpen: boolean
  onExitComplete: () => void
  type: 'ADD' | 'EDIT'
}
type IForm = Pick<PlannerType, 'scheduleName'>
export const SelectModal = ({ closeModal, type, isOpen, onExitComplete }: SelectModalProps) => {
  const { startAt, endAt, scheduleName, colorHex, plannerId, day } = useSelector(
    (state: RootState) => state.selectedInfo
  )
  const { registerInput, handleSubmit, inputFocus, setValue } = useForm<IForm>()
  const { onSubmit } = useSubmit({ startAt, endAt, colorHex, plannerId, day, closeModal, type })
  const [subjectColor, setSubjectColor] = useState<string>(type === 'EDIT' ? colorHex : defaultColor)
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()
  const assignSubjectColor = (color: string) => setSubjectColor(color)

  useInitialization({
    isOpen,
    setScheduleNameInput: (scheduleName: string) => setValue('scheduleName', scheduleName),
    scheduleNameInputFocus: () => inputFocus('scheduleName'),
    initializeSubjectColor: () => setSubjectColor(defaultColor),
    subjectColor,
    scheduleName,
  })

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && (
        <cs.ModalWrapper
          onClick={closeModal}
          variants={cs.ModalWrapperVar}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <s.Root onClick={handleModalClick}>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
              <s.ModalFooter>
                <cs.GreenButton>확인</cs.GreenButton>
                <cs.WhiteButton type="button" onClick={closeModal}>
                  취소
                </cs.WhiteButton>
              </s.ModalFooter>
              <s.ModalTitle>{type === 'ADD' ? '일정추가' : '일정수정'}</s.ModalTitle>
              <s.Title>{dateUtils.getFormattedDate(dateUtils.getDateProps(day))}</s.Title>
              <s.ModalExitButton onClick={closeModal} />
              <s.InputWrapper>
                <s.ButtonTypoWrapper>
                  일정명
                  <s.Input
                    placeholder={'일정명을 입력해주세요'}
                    {...registerInput('scheduleName', { maxLength: MAX_APPOINT_NAME_CHARACTER_COUNT })}
                  />
                </s.ButtonTypoWrapper>
                <s.ColorSelectWrapper>
                  <s.ColorSelectTypo>색상선택</s.ColorSelectTypo>
                  <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
                </s.ColorSelectWrapper>
                {/* <ButtonTypoWrapper>
              요일
              <DaySelect assignSubjectDay={}></DaySelect>
            </ButtonTypoWrapper> */}
                <s.ButtonTypoWrapper>
                  시간
                  <s.TimeSelectWrapper>
                    <TimeSelector set={'부터'} />
                    <TimeSelector set={'까지'} />
                  </s.TimeSelectWrapper>
                </s.ButtonTypoWrapper>
              </s.InputWrapper>
            </s.Form>
          </s.Root>
        </cs.ModalWrapper>
      )}
    </AnimatePresence>
  )
}
