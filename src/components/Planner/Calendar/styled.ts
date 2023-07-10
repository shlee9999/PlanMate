import styled from 'styled-components'

const HOUR_HEIGHT = 17
const HOUR_MARGIN_TOP = 10

export const Wrapper = styled.div`
  width: calc(100% - 30px);
  border: 1px solid;
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
`

interface VGridProps {
  rows: number
}

export const VGrid = styled.div<VGridProps>`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
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
