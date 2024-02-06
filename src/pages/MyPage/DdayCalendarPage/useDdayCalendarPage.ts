import { FindAllDdayResponseProps, findAllDday } from 'api/dday/findAllDday'
import { useForm } from 'hooks'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'
import { dateUtils } from 'utils'
import { useAddDdayMutation, useEditDdayMutation, useDeleteDdayMutation } from '../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { updateSelectedDate } from 'modules/selectedDate'

type IForm = {
  dDayTitle: string
}
export const useDdayCalendarPage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedDDayId, setSelectedDDayId] = useState(-1)
  const selectedDateProps = useSelector((state: RootState) => state.selectedDate)
  const dispatch = useDispatch()
  const { registerInput, handleSubmit, setValue, inputFocus } = useForm<IForm>()
  const setDdayTitle = (title: string) => setValue('dDayTitle', title)
  const { data: dDayList, isLoading } = useQuery<FindAllDdayResponseProps>([QueryKeys.dDayList], () => findAllDday())
  const navigate = useNavigate()
  const mutateAddSchedule = useAddDdayMutation()
  const mutateEditSchedule = useEditDdayMutation()
  const mutateDeleteSchedule = useDeleteDdayMutation()
  const onClickDelete = (e: React.MouseEvent) => {
    e.preventDefault() // * submit 방지
    mutateDeleteSchedule({
      dDayId: selectedDDayId,
      callBack: () => {
        setIsEditing(false)
        dispatch(updateSelectedDate(dateUtils.getDateProps(new Date())))
      },
    })
  }
  const onClickBackButton = () => navigate(-1)
  const onSubmit = ({ dDayTitle }: IForm) => {
    if (!dateUtils.isTodayOrFuture(selectedDateProps)) return
    //* 과거 시간은 추가 수정 X
    if (!isEditing) {
      //* 추가
      mutateAddSchedule({
        targetDate: dateUtils.getYYYYMMDD(selectedDateProps),
        title: dDayTitle,
        callBack: () => {
          setDdayTitle('')
          dispatch(updateSelectedDate(dateUtils.getDateProps(new Date())))
        },
      })
    } else {
      //* 수정
      mutateEditSchedule({
        targetDate: dateUtils.getYYYYMMDD(selectedDateProps),
        title: dDayTitle,
        dDayId: selectedDDayId,
        callBack: () => {
          setDdayTitle('')
          setIsEditing(false)
        },
      })
    }
  }
  useEffect(() => {
    inputFocus('dDayTitle')
  }, [selectedDateProps])

  return {
    dDayList,
    setDdayTitle,
    setIsEditing,
    setSelectedDDayId,
    isLoading,
    isEditing,
    handleSubmit,
    registerInput,
    selectedDateProps,
    onClickDelete,
    onClickBackButton,
    onSubmit,
  }
}
