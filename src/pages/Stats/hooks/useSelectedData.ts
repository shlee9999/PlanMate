import { ResponseStats } from 'api/types'
import { defaultStats } from 'constants/defaultStats'
import { dateUtils } from 'utils'
import { useTodayStats, useSelectedMonthStats } from '.'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

export const useSelectedData = () => {
  const selectedDate = useSelector((state: RootState) => state.selectedDate)
  const { todayStats, todayLoading } = useTodayStats()
  const { selectedMonthStats, isSelectedLoading } = useSelectedMonthStats({ selectedDate })
  const isToday = dateUtils.isEqual(selectedDate, dateUtils.getDateProps(new Date()))
  const isLoading = isSelectedLoading || todayLoading
  //* 오늘을 선택하면 오늘 정보 반환, 그 외에는 원래 정보. loading중이면 기본
  const selectedDateData: ResponseStats = isLoading
    ? defaultStats
    : isToday
    ? todayStats
    : selectedMonthStats[selectedDate.date - 1] || defaultStats

  const totalStudyTime = {
    hour: selectedDateData.totalStudyTimeHours,
    minute: selectedDateData.totalStudyTimeMinutes,
    second: selectedDateData.totalStudyTimeSeconds,
  }
  const restTime = {
    hour: selectedDateData.restTimeHours,
    minute: selectedDateData.restTimeMinutes,
    second: selectedDateData.restTimeSeconds,
  }
  const maxFocusTime = {
    hour: selectedDateData.maxStudyTimeHours,
    minute: selectedDateData.maxStudyTimeMinutes,
    second: selectedDateData.maxStudyTimeSeconds,
  }
  const startAt = { hour: selectedDateData.startAtHours, minute: selectedDateData.startAtMinutes }
  const endAt = { hour: selectedDateData.endAtHours, minute: selectedDateData.endAtMinutes }
  return {
    isLoading,
    selectedDate,
    selectedDateData,
    selectedMonthStats,
    totalStudyTime,
    restTime,
    maxFocusTime,
    startAt,
    endAt,
    studyTimeList: selectedDateData.studyTimeList,
  }
}
