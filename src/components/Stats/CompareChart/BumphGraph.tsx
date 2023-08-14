import React, { PureComponent } from 'react'
import { ComposedChart, Line, Area, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
  // {
  //   // hour: '7:00',
  //   hour: undefined,
  //   오늘: 10,
  //   어제: 20,
  //   lastDot: undefined,
  // },
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
  // {
  //   // hour: '18:00',
  //   hour: undefined,
  //   오늘: 50,
  //   어제: 120,
  //   lastDot: 50,
  // },
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

// const legendPayload = [
//   { value: '오늘', type: 'line', color: '#01CB45' },
//   { value: '어제', type: 'area', color: '#C4F0D3' },
// ]

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
          bottom: 20,
          left: 20,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="5%" stopColor="#E6F3EB" stopOpacity={0.5} />
            <stop offset="20%" stopColor="#BDF0CE" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="white" />
        <XAxis
          dataKey="hour"
          fontSize={8}
          axisLine={{ stroke: '#EBEBEB' }}
          tick={{ fill: '#666666' }}
          tickLine={{ stroke: '#white' }}
        />
        {/* <Legend
          height={20}
          wrapperStyle={{ top: 20, left: 0 }}
          layout="vertical"
          iconType="circle"
          iconSize={8}
          align="left"
          verticalAlign="middle"
        /> */}
        <Area yAxisId="left" type="monotone" dataKey="어제" fill="url(#colorUv)" stroke="#C4F0D3" />
        <Line yAxisId="left" type="monotone" dataKey="오늘" stroke="#01CB45" strokeWidth={2} dot={false} />
        <Line yAxisId="left" type="monotone" dataKey="lastDot" stroke="#01CB45" strokeWidth={2} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
