import { dateUtils } from 'utils'
import { DateProps } from 'types'

const UPDATE_SELECTED_DATE = 'selectedDate/UPDATE_SELECTED_DATE' as const

type SelectedDateType = DateProps

export const updateSelectedDate = (SelectedDate: SelectedDateType) => ({
  type: UPDATE_SELECTED_DATE,
  payload: SelectedDate,
})

type SelectedDateAction = ReturnType<typeof updateSelectedDate>

const InitialSelectedDateState: SelectedDateType = dateUtils.getTodayDateProps()

function selectedDate(state: SelectedDateType = InitialSelectedDateState, action: SelectedDateAction) {
  switch (action.type) {
    case UPDATE_SELECTED_DATE: {
      return action.payload
    }
    default:
      return state
  }
}

export default selectedDate
