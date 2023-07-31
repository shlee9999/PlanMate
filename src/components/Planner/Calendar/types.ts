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

//export to styled

export interface EventType {
  howLong: number
  fromTop: number
}

export interface HourLineType {
  fromTop: number
}
