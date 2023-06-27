import React from 'react'
import Calendar from '../calendar'
import CompareChart from '../HistroyChart'
import { Root } from './styled'

function MenuBox() {
  return (
    <Root>
      <Calendar/>
      <CompareChart/>
    </Root>
  )
}

export default MenuBox
