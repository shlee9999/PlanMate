import React from 'react'

import { WeeklyCalendar } from './Calendar/WeeklyCalendar'


export const Main = () => {
  return (
    <div>
      <div>
        <span>안녕하세요! 메이트 님!</span>
        <span>플래너</span>
      </div>
      <button>일정추가</button>
      <div>4월 4째주</div>
      <WeeklyCalendar></WeeklyCalendar>
    </div>
  )
}
