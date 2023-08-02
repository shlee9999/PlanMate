import React from 'react'
import styled from 'styled-components'

const TableCell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 50px);
  gap: 1px;
`

export const CalendarTable: React.FC = () => {
  const numRows = 24
  const numCols = 7

  const generateTable = () => {
    const table = []
    for (let row = 0; row < numRows; row++) {
      const cells = []
      for (let col = 0; col < numCols; col++) {
        cells.push(<TableCell key={`cell-${row}-${col}`}></TableCell>)
      }
      table.push(
        <div key={`row-${row}`} style={{ display: 'grid', gridTemplateColumns: `repeat(${numCols}, 50px)` }}>
          {cells}
        </div>
      )
    }
    return table
  }

  return <TableContainer>{generateTable()}</TableContainer>
}
