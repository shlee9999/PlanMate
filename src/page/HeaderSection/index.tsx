/* eslint-disable */
import { FC } from 'react'
import { Root, TimerWidgetWrapper } from './styled'
import TimerWidget from 'components/TimerWidget'
import { tabList, useFormattedDate } from 'utils/helper'
import { Tab } from 'page/MainSection/styled'
import { useDispatch } from 'react-redux'

type HeaderSectionProps = {}

export const HeaderSection: FC<HeaderSectionProps> = () => {
  const formattedDate: string = useFormattedDate()
  const dispatch = useDispatch()
  return (
    <Root>
      <p>{formattedDate}</p>
      <TimerWidgetWrapper>
        <TimerWidget title={`Study`} />
        <TimerWidget title={`Exercise`} />
      </TimerWidgetWrapper>
      <Tab>
        {tabList.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch({ type: 'CHANGE_TAB', value: index })
            }}
          >
            {item.title}
          </div>
        ))}
      </Tab>
    </Root>
  )
}
