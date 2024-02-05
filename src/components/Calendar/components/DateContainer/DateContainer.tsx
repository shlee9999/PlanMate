import { Dispatch, FC, SetStateAction } from 'react'
import * as s from './styled'
import { AnimatePresence, Variants } from 'framer-motion'
import { dateUtils } from 'utils'
import { LegendContainer } from './LegendContainer/LegendContainer'
import { WeekRow } from './WeekRow/WeekRow'
import { useSelectedData } from 'pages/Stats/hooks'

type DateContainerProps = {
  blockFuture: boolean
  back: boolean
  setBack: Dispatch<SetStateAction<boolean>>
  legend: boolean
}
const momentum = 100
const DateContainerVar: Variants = {
  initial: (back: boolean) => ({ opacity: 0, x: back ? -momentum : momentum }),
  visible: { opacity: 1, x: 0 },
  exit: (back: boolean) => ({ opacity: 0, x: back ? momentum : -momentum }),
}
export const DateContainer: FC<DateContainerProps> = ({ back, blockFuture, legend, setBack }) => {
  const { selectedMonthStats, selectedDate: selectedDateProps } = useSelectedData()

  return (
    <AnimatePresence initial={false}>
      <s.DateContainerWrapper>
        <s.DateContainer
          key={selectedDateProps.month}
          variants={DateContainerVar}
          initial="initial"
          animate="visible"
          transition={{ duration: 0.5 }}
          custom={back}
        >
          {Array.from(Array(dateUtils.getWeekCount(selectedDateProps.year, selectedDateProps.month)).keys()).map(
            (week) => (
              <WeekRow
                key={week}
                week={week}
                blockFuture={blockFuture}
                setBack={setBack}
                dataSource={selectedMonthStats}
              />
            )
          )}
          <LegendContainer legend={legend} />
        </s.DateContainer>
      </s.DateContainerWrapper>
    </AnimatePresence>
  )
}
