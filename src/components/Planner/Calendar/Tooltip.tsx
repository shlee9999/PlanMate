import React from 'react'
import { TodoPlans } from 'types'
import { PlanColorCircle, ToolTipMainWrapper, TooltipContainer } from './styled'
import { HOUR_HEIGHT, HOUR_MARGIN_TOP } from './constant'

interface TooltipProps {
  hoveredPlan: TodoPlans | null
  planDayIndex: number | null
}

export const Tooltip: React.FC<TooltipProps> = ({ hoveredPlan, planDayIndex }) => {
  const planFromTop = hoveredPlan.begin_hour * HOUR_HEIGHT + HOUR_MARGIN_TOP + hoveredPlan.begin_minute / 2

  return (
    <TooltipContainer planDayIndex={planDayIndex} planFromTop={planFromTop}>
      <ToolTipMainWrapper>
        <PlanColorCircle planColor={hoveredPlan.color} />
        <span>{hoveredPlan.title}</span>
      </ToolTipMainWrapper>
    </TooltipContainer>
  )
}
