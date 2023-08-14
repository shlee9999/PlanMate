import styled from 'styled-components'
import { HOUR_HEIGHT, HOUR_MARGIN_TOP } from './constant'
import { EventType, HourLineType } from './types'

export const CalendarWrapper = styled.div`
  width: 1200px;
  height: 750px;
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
  height: 740px;
  position: relative;
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

  margin-top: 20px;

  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
`

type isToday = boolean

export const DayWrapper = styled.span`
  border: 3px solid gray;
  display: relative;
`

export const Hour = styled.div`
  height: ${HOUR_HEIGHT}px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: ${HOUR_MARGIN_TOP}px;
  }
`

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  margin-top: 20px;
`

export const DateButton = styled.button`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`

export const HourLine = styled.div<HourLineType>`
  position: absolute;
  width: 100%;
  top: 100px;
  border: 1px solid orange;
`

export const Event = styled.div<EventType>`
  position: relative;
  top: ${({ fromTop }) => fromTop}px;
  background: ${({ planColor }) => planColor};
  height: ${({ howLong }) => howLong * HOUR_HEIGHT}px;
  color: white;
  width: calc(100%-10px);
  /* width: 100%; */
  margin: 5px;
  border-radius: 6px;
`
