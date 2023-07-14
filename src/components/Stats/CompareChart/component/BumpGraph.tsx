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
  {
    hour: '11:00',
    오늘: 0,
    어제: 60,
    lastDot: undefined,
  },
  {
    hour: '17:00',
    오늘: 50,
    어제: 120,
    lastDot: undefined,
  },
  {
    hour: '23:00',
    오늘: 100,
    어제: 180,
    lastDot: undefined,
  },
  {
    hour: '5:00',
    오늘: 120,
    어제: 240,
    lastDot: 120,
  },
]

const legendPayload = [
  { value: '오늘', type: 'line', color: '#01CB45' },
  { value: '어제', type: 'area', color: '#C4F0D3' },
]

export default class BumpGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
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
            tickLine={{ stroke: 'white' }}
          />
          <Legend
            height={36}
            wrapperStyle={{ top: 40, left: 20 }}
            layout="vertical"
            iconType="plainline"
            align="left"
            verticalAlign="middle"
          />
          <Area yAxisId="left" type="monotone" dataKey="어제" fill="url(#colorUv)" stroke="#C4F0D3" />
          <Line yAxisId="left" type="monotone" dataKey="오늘" stroke="#01CB45" strokeWidth={2} dot={false} />
          <Line yAxisId="left" type="monotone" dataKey="lastDot" stroke="#01CB45" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}
