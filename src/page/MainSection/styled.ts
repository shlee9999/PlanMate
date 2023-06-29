import { HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${HEADER_HEIGHT};
`

export const Tab = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
`

export const AddButton = styled.button`
  margin-top: 5px;
  cursor: pointer;
`
