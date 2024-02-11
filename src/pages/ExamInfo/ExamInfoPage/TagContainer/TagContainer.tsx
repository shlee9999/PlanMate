import React, { FC, useCallback } from 'react'
import * as s from './styled'
import { Display } from 'components'
import { DISPLAY } from 'types'
import TagButton from './TagButton'

type DTagContainerProps = {
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export const TagContainer: FC<DTagContainerProps> = ({ tagList, selectedTag, setSelectedTag }) => {
  const onClickTag = (tag: string) => () => selectedTag === tag ? setSelectedTag('') : setSelectedTag(tag)

  const renderContent = (tagDivisionIndex: number) => (
    <>
      <s.TagContainer>
        {tagList.map((tag, index) =>
          index > tagDivisionIndex ? null : (
            <TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTag(tagList[index])}
              tag={tag}
            />
          )
        )}
      </s.TagContainer>
      <s.TagContainer>
        {tagList.map((tag, index) =>
          index <= tagDivisionIndex ? null : (
            <TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTag(tagList[index])}
              tag={tag}
            />
          )
        )}
      </s.TagContainer>
    </>
  )
  return (
    <>
      <Display on={DISPLAY.XLARGE}>{renderContent(5)}</Display>
      <Display on={DISPLAY.LARGE}>{renderContent(7)}</Display>
    </>
  )
}
