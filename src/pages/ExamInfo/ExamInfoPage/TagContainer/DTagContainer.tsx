import React, { FC } from 'react'
import * as s from './styled'

type DTagContainerProps = {
  className?: string
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export const DTagContainer: FC<DTagContainerProps> = ({ className, tagList, selectedTag, setSelectedTag }) => {
  const onClickTag = (tag: string) => () => {
    if (selectedTag === tag) setSelectedTag('')
    else setSelectedTag(tag)
  }
  return (
    <s.DTagContainer on="DESKTOP" className={className}>
      <s.TagButtonContainer>
        {tagList.map((tag, index) =>
          index > 5 ? null : (
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
          index <= 5 ? null : (
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
    </s.DTagContainer>
  )
}
