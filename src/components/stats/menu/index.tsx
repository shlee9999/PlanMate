import React from 'react'
import Calendar from '../calendar'
import Chart from '../Chart'
import ResultGraph from '../resultgraph'
import { Root } from './styled'

function MenuBox() {
  return (
    <Root>
      <Calendar/>
      <Chart/>
      {/* <ResultGraph></ResultGraph> */}
    </Root>
  )
}

export default MenuBox
