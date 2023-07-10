import React from 'react'
import { useFormattedDate } from 'utils/helper'

export const HeaderDate = () => {
  const formattedDate: string = useFormattedDate()
  return (
    <div>
      {formattedDate}
    </div>
  )
}
