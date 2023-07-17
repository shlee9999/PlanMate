import React from 'react'
import { useFormattedDate } from 'utils/helper'
import styled from 'styled-components'

const Container = styled.div`
  height: 15px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`

export const HeaderDate = () => {
  const formattedDate: string = useFormattedDate()
  return <Container>{formattedDate}</Container>
}
