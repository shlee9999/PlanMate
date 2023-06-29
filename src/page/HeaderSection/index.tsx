import { FC } from 'react'
import { Logo, Root } from './styled'
import { tabList } from 'utils/helper'
import { Tab } from 'page/MainSection/styled'
import { useDispatch } from 'react-redux'

type HeaderSectionProps = {}

export const HeaderSection: FC<HeaderSectionProps> = () => {
  const dispatch = useDispatch()
  return (
    <Root>
      <Logo />
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
