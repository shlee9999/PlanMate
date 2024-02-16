import { FC, useState } from 'react'
import * as s from './styled'
import { useDetectClickOutside } from '../../../../hooks/useDetectClickOutside'
import { useModal } from 'hooks'

type TagSelectorProps = {
  className?: string
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
  title?: string
  selectorHeight?: number
  selectorWidth?: number
  optionContainerHeight?: number
}

/**
 *
 * @param {string} tagList
 * @param {string} selectedTag
 * @param {string} setSelectedTag
 * @param {string} selectorHeight 셀렉터 높이
 * @param {string} selectorWidth 셀렉터 폭 (제목을 포함한)
 * @param {string} optionContainerHeight 목록 높이
 * @param {string} title 왼쪽에 붙는 제목
 * @returns
 */
export const TagSelector: FC<TagSelectorProps> = ({
  className,
  tagList,
  selectedTag,
  setSelectedTag,
  selectorHeight = 48,
  selectorWidth = 209,
  optionContainerHeight = 102,
  title = '태그',
}) => {
  const { isOpen: isSelecting, closeModal: closeSelector, toggleModal: toggleIsSelecting } = useModal()
  const onClickTagSelector = (e: React.MouseEvent) => {
    toggleIsSelecting()
    e.stopPropagation()
  }
  const onClickTag = (id: number) => (e: React.MouseEvent) => {
    setSelectedTag(tagList[id])
    e.stopPropagation()
    closeSelector()
  }
  const ref = useDetectClickOutside({ isOpen: isSelecting, closeModal: closeSelector })
  return (
    <s.TagSelectorWrapper ref={ref} className={className} $selectorHeight={selectorHeight}>
      {title && <s.TagTypo>{title}</s.TagTypo>}
      <s.TagSelector onClick={onClickTagSelector} $selectorWidth={selectorWidth}>
        {selectedTag === '선택해주세요' ? selectedTag : '# ' + selectedTag}
        <s.TagListArrow />
        {isSelecting && (
          <s.TagOptionContainer $optionContainerHeight={optionContainerHeight} $selectorWidth={selectorWidth}>
            {tagList.map((tag, index) => (
              <s.TagOption key={index} onClick={onClickTag(index)}>
                {tag}
              </s.TagOption>
            ))}
          </s.TagOptionContainer>
        )}
      </s.TagSelector>
    </s.TagSelectorWrapper>
  )
}
