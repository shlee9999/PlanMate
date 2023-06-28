import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Globals } from 'types'

const Container = styled.div`
    width: 110px;
    height: 60px;
    border: 1px solid black;
`

export const TotalRecord = () => {
  const TotalFoucsTime = useSelector((state: Globals)=>state.isStudying)
  return (
    <Container>
        <h1>
          집중 시간 : {TotalFoucsTime}
        </h1>
    </Container>
  )
}
