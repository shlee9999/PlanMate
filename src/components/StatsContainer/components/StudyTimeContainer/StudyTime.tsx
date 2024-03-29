import React from 'react'
import * as s from './styled'

interface OwnProps {
  text: string
  title: string
}

export const StudyTime: React.FC<OwnProps> = ({ title, text }) => {
  return (
    <s.StudyTime>
      <s.Header>{title}</s.Header>
      <s.Time>{text}</s.Time>
    </s.StudyTime>
  )
}
