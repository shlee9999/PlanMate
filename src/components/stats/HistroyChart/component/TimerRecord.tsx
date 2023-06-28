import React from 'react'
import { TotalRecord } from './TotalRecord'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`
export const TimerRecord = () => {
  return (
    <Container>
        <TotalRecord />
    </Container>
  )
}
