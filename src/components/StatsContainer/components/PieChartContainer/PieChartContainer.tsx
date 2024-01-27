import React from 'react'
import * as s from './styled'
import { PieChart } from './PieChart'
import { StudyTimeEntry } from 'api/types'
import { TimeProps } from 'types'
import { timeUtils } from 'utils'
import { StatsContainerType } from 'enums'

export interface PieChartData {
  name: string
  totalTime: number
  colorHex: string
}
const colorList = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

type PieChartContainerProps = {
  studyTimeList: StudyTimeEntry[]
  restTime: TimeProps
  totalStudyTime: TimeProps
  type: StatsContainerType
}
const dummyData = [
  {
    name: 'default',
    totalTime: 1,
    colorHex: '#D9D9D9',
  },
]
export const PieChartContainer: React.FC<PieChartContainerProps> = ({
  studyTimeList,
  restTime,
  totalStudyTime,
  type,
}) => {
  const restData: PieChartData[] = [
    {
      name: '공부',
      totalTime: timeUtils.timeToSecond(totalStudyTime),
      colorHex: colorList[2],
    },
    {
      name: '휴식',
      totalTime: timeUtils.timeToSecond(restTime) || 1,
      colorHex: '#D9D9D9',
    },
  ]
  const studyData: PieChartData[] =
    studyTimeList.slice(0, 5).map((studyTime, index) => ({
      name: studyTime.name,
      totalTime:
        timeUtils.timeToSecond({
          hour: studyTime.studyTimeHours,
          minute: studyTime.studyTimeMinutes,
          second: studyTime.studyTimeSeconds,
        }) || 0.01,
      colorHex: colorList[index],
    })) || [].concat({ name: '', totalTime: 0.01, colorHex: 'transparent' })
  const CommonContent = (
    <>
      <s.PieChartWrapper>
        <s.PiechartTitle>과목별 비율</s.PiechartTitle>
        <PieChart data={studyData.length ? studyData : dummyData} index={0} />
      </s.PieChartWrapper>
      <s.PieChartWrapper>
        <s.PiechartTitle>공부/휴식 비율</s.PiechartTitle>
        <PieChart data={restData} index={1} />
      </s.PieChartWrapper>
    </>
  )
  return <s.StatsPieChartContainer>{CommonContent}</s.StatsPieChartContainer>
}
