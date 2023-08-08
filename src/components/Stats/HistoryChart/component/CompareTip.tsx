import React from 'react'
import { CompareTitleWrapper, CompareTitle, CompareTimer } from '../styled'

export const CompareTip: React.FC = () => {
  return (
    <CompareTitleWrapper>
      <CompareTitle>오후 7시까지의 비교</CompareTitle>
      <CompareTimer>+ 00:30:13</CompareTimer>
    </CompareTitleWrapper>
  )
}
