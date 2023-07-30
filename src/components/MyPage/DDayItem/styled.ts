import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  max-width: 354px;
  height: 48px;
  box-sizing: border-box;
  padding: 15px 16px 8px;
  display: flex;
  background-color: #f9f9f9;
  border-radius: 8px;
  &.isMarked {
    background-color: #e2f9e9;
  }
`

export const MarkImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  flex-basis: content;
`
export const Title = styled.p`
  margin-right: 2px;
  flex-basis: content;
`
export const Date = styled.p``
export const DDay = styled.p`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`
