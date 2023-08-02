import styled from 'styled-components'

export const Root = styled.div`
  min-width: fit-content;
  position: relative;
  height: 48px;
  box-sizing: border-box;
  padding: 15px 8px;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  white-space: nowrap;
  &.isMarked {
    background-color: #e2f9e9;
  }
`
export const LeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
`
export const MarkImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  flex-basis: content;
`
export const Title = styled.p`
  max-width: 180px;
  margin-right: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #444444;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Date = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  color: #666666;
  align-self: flex-end;
`
export const DDay = styled.p`
  &::before {
    content: 'D - ';
  }
  right: 16px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  color: #444444;
`
