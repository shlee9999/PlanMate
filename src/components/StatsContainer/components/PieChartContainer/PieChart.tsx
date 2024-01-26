import React from 'react'
import { PieChart as MyPieChart, Pie, Legend, Cell } from 'recharts'
import { PieChartData } from './PieChartContainer'

const RADIAN = Math.PI / 180

interface PieChartProps {
  data: PieChartData[]
  index: number
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={6}
      fontWeight={500}
      fontFamily="Spoqa Han Sans Neo"
    >
      {percent !== 0 && `${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export const PieChart: React.FC<PieChartProps> = ({ data, index }) => {
  const renderColorfulLegendText = (value: string, entry: any) => (
    <span
      style={{
        color: '#666666',
        fontWeight: 400,
        fontSize: '10px',
        paddingRight: index === 1 && 18,
      }}
    >
      {value.length > 4 ? value.substring(0, 4) : value}
    </span>
  )
  return (
    <MyPieChart width={200} height={100}>
      <Legend
        iconType="circle"
        layout="radial"
        align="right"
        verticalAlign="middle"
        iconSize={8}
        formatter={renderColorfulLegendText}
      />
      <Pie
        data={data}
        cx={70}
        cy={45}
        innerRadius={25}
        outerRadius={50}
        fill="#8884d8"
        dataKey="totalTime"
        label={renderCustomizedLabel}
        labelLine={false}
        animationBegin={0}
        animationDuration={1000}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.colorHex} />
        ))}
      </Pie>
    </MyPieChart>
  )
}
