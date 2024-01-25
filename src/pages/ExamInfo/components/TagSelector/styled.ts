import { DownArrow } from 'commonStyled'
import styled from 'styled-components'

export const Root = styled.div<{ $selectorHeight: number }>`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  z-index: 100;
  margin-left: 24px;
  height: ${(props) => props.$selectorHeight}px;
`

export const TagSelector = styled.div<{ $selectorWidth: number }>`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 9px;
  width: ${(props) => props.$selectorWidth}px;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.dark};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.theme.text.gray2};
`
export const TagListArrow = styled(DownArrow)`
  position: absolute;
  right: 6px;
`

export const TagOptionContainer = styled.div<{ $optionContainerHeight: number; $selectorWidth: number }>`
  position: absolute;
  bottom: -${(props) => props.$optionContainerHeight + 5}px;
  left: 0;
  padding: 6px 12px 6px 6px;
  width: ${(props) => props.$selectorWidth}px;
  height: ${(props) => props.$optionContainerHeight}px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.background.white};
  z-index: 2;
`

export const TagOption = styled.button`
  width: 191px;
  height: 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: ${(props) => props.theme.text.gray2};

  &:hover {
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary.light};
    color: ${(props) => props.theme.primary.default};
  }

  &::before {
    content: '# ';
  }
`

export const TagTypo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 48px;
  white-space: nowrap;
`
