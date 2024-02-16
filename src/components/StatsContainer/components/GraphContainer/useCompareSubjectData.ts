import { CompareSubjectResponseProps, compareSubject } from 'api/subject/compareSubject'
import { useTodayStats } from 'pages/Timer/hooks'
import { useQuery } from 'react-query'
import { QueryKeys } from 'types'
import { timeUtils } from 'utils'

const compareHours = ['00:00', '06:00', '12:00', '18:00', '24:00']
const sortByTime = (a, b) => {
  const [hoursA, minutesA] = a.hour.split(':').map((n) => parseInt(n, 10))
  const [hoursB, minutesB] = b.hour.split(':').map((n) => parseInt(n, 10))
  return hoursA - hoursB || minutesA - minutesB
}
export const useCompareSubjectData = () => {
  const currentTimeFormatted = timeUtils.getCurrentTime().slice(0, 5) // 이 함수가 'HH:mm' 형식의 문자열을 반환한다고 가정합니다.
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
  const { yesterdayStudyTimeList, todayStudyTimeList } = compareSubjectData
  const yesterdayStudyTime = yesterdayStudyTimeList.map((timeData) => timeUtils.timeToSecond(timeData))
  const todayStudyTime = todayStudyTimeList.map((timeData) => timeUtils.timeToSecond(timeData))
  const { totalStudyTime: todayStudyTimeProps } = useTodayStats()
  if (!compareHours.includes(currentTimeFormatted)) {
    compareHours.push(currentTimeFormatted)
  }
  const totalStudyTime = timeUtils.timeToSecond(todayStudyTimeProps)
  const parsedData = compareHours
    .map((hour, index) => {
      if (index === 0)
        return {
          hour,
          today: 0,
          yesterday: 0,
          lastDot: undefined,
        }
      const todayTime = index < 5 ? todayStudyTime[index - 1] : totalStudyTime
      const yesterdayTime = index < 5 ? yesterdayStudyTime[index - 1] : 0
      return {
        hour,
        today: todayTime,
        yesterday: yesterdayTime,
        lastDot: hour === currentTimeFormatted ? todayTime : undefined,
      }
    })
    .sort(sortByTime)
    .map((data, index, arr) => {
      if (data.hour === currentTimeFormatted && arr[index - 1] && arr[index + 1]) {
        data.yesterday = (arr[index - 1].yesterday + arr[index + 1].yesterday) / 2
      }
      if (+data.hour.slice(0, 2) > +currentTimeFormatted.slice(0, 2)) data.today = undefined
      return data
    })
  console.log(parsedData)
  return { parsedData, isCompareSubjectDataLoading }
}
