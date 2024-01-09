import React from 'react'
import { ComposedChart, Line, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
// Line 그래프
interface Data {
  hour: string
  오늘: number
  어제: number
  lastDot?: number
}

const data: Data[] = [
  {
    hour: '5:00',
    오늘: 0,
    어제: 0,
    lastDot: undefined,
  },
  {
    hour: '11:00',
    오늘: 20,
    어제: 40,
    lastDot: undefined,
  },
  {
    hour: '17:00',
    오늘: 50,
    어제: 120,
    lastDot: 50,
  },
  {
    hour: '23:00',
    오늘: undefined,
    어제: 120,
    lastDot: undefined,
  },
  {
    hour: '5:00',
    오늘: undefined,
    어제: 120,
    lastDot: undefined,
  },
]
export const BumpGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 30,
          right: 20,
          bottom: 0,
          left: 20,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="5%" stopColor="#E6F3EB" stopOpacity={0.5} />
            <stop offset="20%" stopColor="#BDF0CE" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="hour"
          fontSize={10}
          axisLine={{ stroke: '#EBEBEB' }}
          tick={{ fill: '#666666' }}
          tickLine={{ stroke: '#white' }}
        />
        <Area yAxisId="left" type="monotone" dataKey="어제" fill="url(#colorUv)" stroke="#C4F0D3" />
        <Line yAxisId="left" type="monotone" dataKey="오늘" stroke="#01CB45" strokeWidth={1} dot={false} />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="lastDot"
          stroke="#01CB45"
          strokeWidth={1}
          fill="white"
          fillRule="nonzero"
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
