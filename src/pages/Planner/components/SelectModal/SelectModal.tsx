import * as s from './styled'
import * as cs from 'commonStyled'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TimeSelect } from '.'
import { ColorPicker } from 'components/'
import { addAppoint, updateAppoint } from 'modules/appointments'
import { RootState } from 'modules'
import { dateUtils } from 'utils'
import { updateProp } from 'modules/selectedInfo'
import { defaultColor } from 'constants/color'
import { AnimatePresence } from 'framer-motion'
import { useAddAppointMutation, useEditAppointMutation } from '../../hooks/mutations/'
import { useForm } from 'hooks'
import { PlannerType } from 'api/types'
import { MAX_APPOINT_NAME_CHARACTER_COUNT } from 'constants/maxCharacterCount'

type SelectModalProps = {
  closeModal: () => void
  title: string
  isOpen: boolean
  onExitComplete: () => void
}
type IForm = Pick<PlannerType, 'scheduleName'>
export const SelectModal = ({ closeModal, title, isOpen, onExitComplete }: SelectModalProps) => {
  const { startAt, endAt, scheduleName, colorHex, plannerId, day } = useSelector(
    (state: RootState) => state.selectedInfo
  )
  const { registerInput, handleSubmit, inputFocus, setValue } = useForm<IForm>()
  const type = title.slice(-2) === '추가' ? 'ADD' : 'EDIT'
  const [subjectColor, setSubjectColor] = useState<string>(type === 'EDIT' ? colorHex : defaultColor)
  const dispatch = useDispatch()
  const mutateAddAppoint = useAddAppointMutation()
  const mutateEditAppoint = useEditAppointMutation()
  const assignSubjectColor = (color: string) => setSubjectColor(color)
  const onSubmit = ({ scheduleName }: IForm) => {
    if (type === 'ADD') {
      dispatch(
        addAppoint({
          scheduleName,
          startAt,
          endAt,
          colorHex,
          plannerId: new Date().getTime(),
          day,
        })
      )
      mutateAddAppoint({ colorHex, startAt, day, endAt, scheduleName })
    } else {
      // 수정
      dispatch(
        updateAppoint({
          scheduleName,
          startAt,
          endAt,
          colorHex,
          plannerId,
          day,
        })
      )
      mutateEditAppoint({
        colorHex,
        startAt,
        day,
        endAt,
        scheduleName,
        plannerId,
      })
    }
    closeModal()
  }
  const onClickCloseButton = (e: React.MouseEvent) => {
    e.preventDefault()
    closeModal()
  }
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()

  useEffect(() => {
    inputFocus('scheduleName')
    setSubjectColor(defaultColor)
  }, [isOpen])

  useEffect(() => {
    dispatch(updateProp('colorHex', subjectColor))
  }, [subjectColor])

  useEffect(() => {
    if (type === 'EDIT') setValue('scheduleName', scheduleName)
  }, [scheduleName])
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
                <cs.WhiteButton onClick={onClickCloseButton}>취소</cs.WhiteButton>
              </s.ModalFooter>
              <s.ModalTitle>{title}</s.ModalTitle>
              <s.Title>{dateUtils.getFormattedDate(day)}</s.Title>
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
                    <TimeSelect set={'부터'} />
                    <TimeSelect set={'까지'} />
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
