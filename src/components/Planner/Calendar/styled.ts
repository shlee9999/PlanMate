import styled from 'styled-components'

const HOUR_HEIGHT = 17
const HOUR_MARGIN_TOP = 10

export const Wrapper = styled.div`
  width: 1200px;
  height: 700px;
  border: 5px solid black;
  margin: 15px;
`
interface HGridProps {
  first?: string
  cols: number
}

export const HGrid = styled.div<HGridProps>`
  display: grid;
  grid-template-columns: ${({ first, cols }) => `${first || ''} repeat(${cols}, 1fr)`};
  text-align: center;
  height: 700px;
`

interface VGridProps {
  rows: number
}

export const VGrid = styled.div<VGridProps>`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  border: 1px solid blue;
  justify-items: right;
  padding-right: 5px;

  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
`

export const DayWrapper = styled.span`
  border: 1px solid gray;
`

export const Hour = styled.div`
  height: ${HOUR_HEIGHT}px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: ${HOUR_MARGIN_TOP}px;
  }
`
export const PlanWrapper = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 8px;
  border-radius: 4px;
`

export const PlanTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
`

export const PlanColor = styled.span`
  font-size: 12px;
  color: #888;
`
