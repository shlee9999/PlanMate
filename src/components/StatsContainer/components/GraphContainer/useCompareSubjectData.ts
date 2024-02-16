import { CompareSubjectResponseProps, compareSubject } from 'api/subject/compareSubject'
import { useTodayStats } from 'pages/Timer/hooks'
import { useQuery } from 'react-query'
import { QueryKeys } from 'types'
import { timeUtils } from 'utils'
interface CompareSubjectDataType {
  hour: string
  today: number
  yesterday: number
  lastDot?: number
}

const compareHours = ['00:00', '06:00', '12:00', '18:00', '24:00']

export const useCompareSubjectData = () => {
  const { data: compareSubjectData, isLoading: isCompareSubjectDataLoading } = useQuery<CompareSubjectResponseProps>(
    [QueryKeys.compareData],
    () => compareSubject(),
    {
      initialData: {
        nowGraphHour: 0,
        todayHour: 0,
        todayMinute: 0,
        todaySecond: 0,
        todayStudyTimeList: [
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
        ],
        yesterdayStudyTimeList: [
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
          {
            hour: 0,
            minute: 0,
            second: 0,
          },
        ],
      },
    }
  )
  const { nowGraphHour, yesterdayStudyTimeList } = compareSubjectData
  const { totalStudyTime: todayStudyTimeProps } = useTodayStats()
  const todayStudyTime = timeUtils.timeToSecond(todayStudyTimeProps)
  const yesterdayStudyTime = yesterdayStudyTimeList.map((yesterdayStudyTime) =>
    timeUtils.timeToSecond(yesterdayStudyTime)
  )

  const parsedData: CompareSubjectDataType[] = compareHours.map((hour, index) => ({
    hour,
    today: index == 0 ? 0 : todayStudyTime, //todo: 배열로바꾸기
    yesterday: index == 0 ? 0 : yesterdayStudyTime[index - 1],
    lastDot: index === 0 ? undefined : +hour.slice(0, 2) === nowGraphHour ? todayStudyTime : undefined, //todo: 현재시간으로 표시해주기
  }))
  return { parsedData, isCompareSubjectDataLoading }
}
