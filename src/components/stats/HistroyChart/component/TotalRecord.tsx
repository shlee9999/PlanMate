import React from 'react'
import { useSelector } from 'react-redux'
import { Globals } from 'types'
import { ContainerRecord, HeaderRecord, MainRecord } from './styled'

export const TotalRecord = () => {
  const TotalFoucsTime = useSelector((state: Globals)=>state.isStudying)
  return (
    <ContainerRecord>
      <HeaderRecord>총 운동시간</HeaderRecord>
        <MainRecord>
          집중 시간 : {TotalFoucsTime}
        </MainRecord>
    </ContainerRecord>
  )
}
