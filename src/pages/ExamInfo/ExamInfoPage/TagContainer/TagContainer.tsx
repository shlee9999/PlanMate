import React, { FC } from 'react'
import * as s from './styled'
import { Display } from 'components'

type DTagContainerProps = {
  className?: string
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export const TagContainer: FC<DTagContainerProps> = ({ className, tagList, selectedTag, setSelectedTag }) => {
  const onClickTag = (tag: string) => () => {
    if (selectedTag === tag) setSelectedTag('')
    else setSelectedTag(tag)
  }
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
      <Display on="DESKTOP">{renderContent(5)}</Display>
      <Display on="TABLET">{renderContent(7)}</Display>
    </>
  )
}
