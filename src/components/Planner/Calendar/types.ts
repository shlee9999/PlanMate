export interface PlanDate {
  text: string | null
  from: Date
  to: Date
}

export interface Plan {
  date: Date
  name: string | null
  howLong: number
}

export interface TooltipType {
  planDayIndex: number
  planFromTop: number
}

export interface EventType {
  howLong: number
  fromTop: number
  planColor: string
}

export interface HourLineType {
  fromTop: number
}

export interface PlanColorCircleType {
  planColor: string
}
