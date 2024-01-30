import { FC } from 'react'
import * as s from './styled'
import { useRemoveAppointMutation } from 'pages/Planner/hooks/mutations'
import { PlannerType } from 'api/types'
import { updateInfo } from 'modules/selectedInfo'
import { useDispatch } from 'react-redux'

type AppointmentProps = {
  height: number
  onMouseDown: (e: React.MouseEvent) => void
  appoint: PlannerType
  openModal: () => void
}

export const Appointment: FC<AppointmentProps> = ({ height, onMouseDown, appoint, openModal }) => {
  const dispatch = useDispatch()
  const { plannerId, colorHex, scheduleName } = appoint
  const mutateRemoveAppoint = useRemoveAppointMutation()
  const onClickClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    mutateRemoveAppoint({ plannerId })
  }
  const onClick = () => {
    dispatch(
      updateInfo({
        ...appoint,
      })
    )
    openModal()
  }
  return (
    <s.Wrapper $bgColor={colorHex} $height={height * 103 + '%'} onClick={onClick} onMouseDown={onMouseDown}>
      <s.Appointment $bgColor={colorHex}>
        <s.Title>{scheduleName}</s.Title>
        <s.CloseButton onClick={onClickClose} />
        <s.LeftBar $bgColor={colorHex} />
      </s.Appointment>
    </s.Wrapper>
  )
}
