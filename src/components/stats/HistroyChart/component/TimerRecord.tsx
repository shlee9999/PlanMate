import React from 'react'
import { TotalRecord } from './TotalRecord'
import { MaxFoucsRecord } from './MaxFoucsRecord'
import { StartRecord } from './StartRecord'
import { TerminateRecord } from './TerminateRecord'
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
        <MaxFoucsRecord />
        <StartRecord />
        <TerminateRecord />
    </Container>
  )
}
