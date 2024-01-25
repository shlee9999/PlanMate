import { FC, useEffect, useRef, useState } from 'react'
import * as s from './styled'

type TagSelectorProps = {
  className?: string
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
  title?: string
}

export const TagSelector: FC<TagSelectorProps> = ({
  className,
  tagList,
  selectedTag,
  setSelectedTag,
  title = '태그',
}) => {
  const [isSelecting, setIsSelecting] = useState(false)

  const onClickTagSelector = (e: React.MouseEvent) => {
    setIsSelecting((prev) => !prev)
    e.stopPropagation()
  }
  const onClickTag = (id: number) => (e: React.MouseEvent) => {
    setSelectedTag(tagList[id])
    e.stopPropagation()
    setIsSelecting(false)
  }
  const tagSelectorRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isSelecting && !e.composedPath().includes(tagSelectorRef.current)) {
        setIsSelecting(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSelecting])
  return (
    <s.Root className={className} ref={tagSelectorRef}>
      {title && <s.TagTypo>{title}</s.TagTypo>}
      <s.TagSelector onClick={onClickTagSelector}>
        {selectedTag === '선택해주세요' ? selectedTag : '# ' + selectedTag}
        <s.TagListArrow />
        {isSelecting && (
          <s.TagOptionContainer>
            {tagList.map((tag, index) => (
              <s.TagOption key={index} onClick={onClickTag(index)}>
                {tag}
              </s.TagOption>
            ))}
          </s.TagOptionContainer>
        )}
      </s.TagSelector>
    </s.Root>
  )
}
