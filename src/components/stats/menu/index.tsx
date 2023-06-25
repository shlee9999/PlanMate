import React from 'react'
import Calendar from '../calendar'
import CompareChart from '../CompareChart'
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
