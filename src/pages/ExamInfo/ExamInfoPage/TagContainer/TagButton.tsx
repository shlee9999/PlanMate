import React from 'react'
import * as s from './styled'

type TagButtonProps = {
  className: string
  onClick: () => void
  tag: string
}

function TagButton({ className, onClick, tag }: TagButtonProps) {
  return (
    <s.TagButton className={className} onClick={onClick}>
      #{tag}
    </s.TagButton>
  )
}
export default React.memo(TagButton, (prev, next) => prev.className === next.className)
