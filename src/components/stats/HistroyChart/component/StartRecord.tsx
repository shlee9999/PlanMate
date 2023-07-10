import React from 'react'
import { ContainerRecord, HeaderRecord, MainRecord } from './styled'

export const StartRecord = () => {
  return (
    <ContainerRecord>
      <HeaderRecord>시작시간</HeaderRecord>
        <MainRecord>
          시작 시간 : 
        </MainRecord>
    </ContainerRecord>
  )
}
