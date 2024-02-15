import React from 'react'
import { ComposedChart, Line, Area, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { useCompareSubjectData } from './useCompareSubjectData'
// Line 그래프

export const BumpGraph = () => {
  const { parsedData } = useCompareSubjectData()
  return (
    <ResponsiveContainer>
      <ComposedChart data={parsedData}>
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
        <Area yAxisId="left" type="monotone" dataKey="yesterday" fill="url(#colorUv)" stroke="#C4F0D3" />
        <Line yAxisId="left" type="monotone" dataKey="today" stroke="#01CB45" strokeWidth={1} dot={false} />
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
