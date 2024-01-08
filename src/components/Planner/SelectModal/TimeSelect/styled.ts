import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`

export const StyledCategorySelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 208px;
  height: 32px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
  }
`

export const StyledSelect = styled.select`
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 64px;
  height: 32px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
  }
`

export const SelectOption = styled.option``

export const SelectColorWrapper = styled.div``

export const ColorPickerButton = styled.button<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: none;
  cursor: pointer;
`
