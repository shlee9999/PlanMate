import React from 'react'
import Calendar from '../calendar'
import { HistoryChart } from '../HistoryChart'
import { Root } from './styled'

function MenuBox() {
  return (
    <Root>
      <Calendar />
      <HistoryChart />
    </Root>
  )
}

export default MenuBox
