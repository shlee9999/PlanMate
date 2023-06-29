import TimerTab from 'tabs/Timer'
import StatisticsTab from 'tabs/Statistics'
import PlannerTab from 'tabs/Planner'
import InformationTab from 'tabs/Information'
import { TabInfo } from 'types'

export const generateId = (): string => {
  const timestamp = Date.now().toString() // 현재 시간을 밀리초 단위로 가져옴
  const random = Math.random().toString().slice(2, 8) // 6자리 난수 생성
  return `${timestamp}-${random}` // 타임스탬프와 난수를 합쳐 고유한 ID 생성
}

export const week = ['일', '월', '화', '수', '목', '금', '토']

export const tabList: Array<TabInfo> = [
  { title: '타이머', component: <TimerTab />, wrapper: 'timer_tab_wrapper' },
  {
    title: '통계',
    component: <StatisticsTab />,
    wrapper: 'statistics_tab_wrapper',
  },
  {
    title: '플래너',
    component: <PlannerTab />,
    wrapper: 'planner_tab_wrapper',
  },
  {
    title: '수험정보',
    component: <InformationTab />,
    wrapper: 'information_tab_wrapper',
  },
]

export const colorList = [
  ['#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00'],
  ['#00ff00', '#33ff00', '#66ff00', '#99ff00', '#ccff00'],
  ['#00ccff', '#0099ff', '#0066ff', '#0033ff', '#0000ff'],
  ['#cc00ff', '#9900ff', '#6600ff', '#3300ff', '#00ffff'],
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
  const formattedDate: string = month + '.' + date + '(' + week[day] + ')'
  return formattedDate
}
