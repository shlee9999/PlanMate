import React from 'react'
import Calendar from '../calendar'
import Chart from '../Chart'
import { Root } from './styled'

function MenuBox() {
  return (
    <Root>
      <Calendar/>
      <Chart/>
    </Root>
  )
}

export default MenuBox
