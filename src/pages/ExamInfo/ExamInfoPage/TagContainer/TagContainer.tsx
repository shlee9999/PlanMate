import React, { FC } from 'react'
import * as s from './styled'
import { Display } from 'components'
import { DISPLAY } from 'types'

type DTagContainerProps = {
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export const TagContainer: FC<DTagContainerProps> = ({ tagList, selectedTag, setSelectedTag }) => {
  const onClickTag = (tag: string) => () => selectedTag === tag ? setSelectedTag('') : setSelectedTag(tag)
  const renderContent = (tagDivisionIndex: number) => (
    <>
      <s.TagButtonContainer>
        {tagList.map((tag, index) =>
          index > tagDivisionIndex ? null : (
            <s.TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTag(tagList[index])}
            >
              <s.Tag>{tag}</s.Tag>
            </s.TagButton>
          )
        )}
      </s.TagButtonContainer>
      <s.TagButtonContainer>
        {tagList.map((tag, index) =>
          index <= tagDivisionIndex ? null : (
            <s.TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTag(tagList[index])}
            >
              <s.Tag>{tag}</s.Tag>
            </s.TagButton>
          )
        )}
      </s.TagButtonContainer>
    </>
  )
  return (
    <>
      <Display on={DISPLAY.XLARGE}>{renderContent(5)}</Display>
      <Display on={DISPLAY.LARGE}>{renderContent(7)}</Display>
    </>
  )
}
