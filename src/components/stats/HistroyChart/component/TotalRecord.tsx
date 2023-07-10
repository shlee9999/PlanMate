import React from 'react'
import { useSelector } from 'react-redux'
import { ContainerRecord, HeaderRecord, MainRecord } from './styled'
import { RootState } from 'modules'

export const TotalRecord = () => {
  const TotalFoucsTime = useSelector((state: RootState) => state.mode.isStudying)
  return (
    <ContainerRecord>
      <HeaderRecord>총 운동시간</HeaderRecord>
      <MainRecord>집중 시간 : {TotalFoucsTime}</MainRecord>
    </ContainerRecord>
  )
}
