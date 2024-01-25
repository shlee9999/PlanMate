import React, { FC } from 'react'
import * as s from './styled'
import { Display } from 'components/Display/Display'

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
  const renderContent = () => (
    <>
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
    </>
  )
  return (
    <>
      <Display on="DESKTOP">{renderContent()}</Display>
      <Display on="TABLET">{renderContent()}</Display>
    </>
  )
}
