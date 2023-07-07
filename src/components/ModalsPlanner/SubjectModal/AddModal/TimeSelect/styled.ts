import styled from 'styled-components'

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
  }
`

export const SelectOption = styled.option``
