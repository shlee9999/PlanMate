import React from 'react'
import { TotalRecord } from './TotalRecord'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 120px 120px;
    
`
export const TimerRecord = () => {
  return (
    <Container>
        <TotalRecord />
        <TotalRecord />
        <TotalRecord />
        <TotalRecord />
    </Container>
  )
}
