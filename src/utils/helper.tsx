import { ExamInfoTab } from 'tabs/ExamInfoTab'
import PlannerTab from 'tabs/PlannerTab'
import StatsTab from 'tabs/StatsTab'
import { TimerTab } from 'tabs/TimerTab'
import { TabInfo } from 'types'

export const generateId = (): string => {
  const timestamp = Date.now().toString() // 현재 시간을 밀리초 단위로 가져옴
  const random = Math.random().toString().slice(2, 8) // 6자리 난수 생성
  return `${timestamp}-${random}` // 타임스탬프와 난수를 합쳐 고유한 ID 생성
}

export const week = ['일', '월', '화', '수', '목', '금', '토']

export const tabList: Array<TabInfo> = [
  { title: '타이머', component: <TimerTab /> },
  {
    title: '통계',
    component: <StatsTab />,
  },
  {
    title: '플래너',
    component: <PlannerTab />,
  },
  {
    title: '수험정보',
    component: <ExamInfoTab />,
  },
]

export const useFormattedTime = (time: number) => {
  const minute: number = Math.floor(time / 60) % 60
  const second: number = Math.floor(time % 60)
  const hour: number = Math.floor(time / 3600) % 24

  const formattedTime: string =
    hour.toString().padStart(2, '0') +
    ':' +
    minute.toString().padStart(2, '0') +
    ':' +
    second.toString().padStart(2, '0')
  return formattedTime
}

export const useFormattedDate = (): string => {
  const now: Date = new Date()
  const month: string = `${now.getMonth() + 1}`.padStart(2, '0')
  const date: string = `${now.getDate()}`.padStart(2, '0')
  const day: number = now.getDay()
  const formattedDate: string = month + '월 ' + date + '일 (' + week[day] + ')요일'
  return formattedDate
}
