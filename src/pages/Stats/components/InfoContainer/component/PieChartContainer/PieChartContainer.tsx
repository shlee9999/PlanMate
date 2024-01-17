import React, { useState } from 'react'

import { Root, Wrapper, PiechartTitle } from './styled'
import { PieChart } from './PieChart'
import { StudyTimeEntry } from 'api/common/commonType'
import { TimeProps } from '../TimerContainer/TimerContainer'
import { getDateInfo, timeToSecond } from 'utils/helper'

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
}
const dummyData = [
  {
    name: 'default',
    totalTime: 1,
    colorHex: '#D9D9D9',
  },
]
export const PieChartContainer: React.FC<PieChartContainerProps> = ({ studyTimeList, restTime, totalStudyTime }) => {
  const restData: PieChartData[] = [
    {
      name: '공부',
      totalTime: timeToSecond(totalStudyTime),
      colorHex: colorList[2],
    },
    {
      name: '휴식',
      totalTime: timeToSecond(restTime) || 1,
      colorHex: '#D9D9D9',
    },
  ]
  const studyData: PieChartData[] =
    studyTimeList.slice(0, 5).map((studyTime, index) => ({
      name: studyTime.name,
      totalTime:
        timeToSecond({
          hour: studyTime.studyTimeHours,
          minute: studyTime.studyTimeMinutes,
          second: studyTime.studyTimeSeconds,
        }) || 0.01,
      colorHex: colorList[index],
    })) || [].concat({ name: '', totalTime: 0.01, colorHex: 'transparent' })

  return (
    <Root>
      <Wrapper>
        <PiechartTitle>과목별 비율</PiechartTitle>
        <PieChart data={studyData.length ? studyData : dummyData} index={0} />
      </Wrapper>
      <Wrapper>
        <PiechartTitle>공부/휴식 비율</PiechartTitle>
        <PieChart data={restData} index={1} />
      </Wrapper>
    </Root>
  )
}
