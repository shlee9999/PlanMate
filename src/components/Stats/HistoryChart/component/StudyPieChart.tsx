import React from 'react'
import { PieChart, Pie, Legend, Cell } from 'recharts'
import { PieChartData } from './PieChartRecord'

const RADIAN = Math.PI / 180

interface OwnProps {
  data: PieChartData[]
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  index: number
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
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const renderColorfulLegendText = (value: string, entry: any) => {
  return <span style={{ color: '#666666', fontWeight: 400, padding: '10px' }}>{value}</span>
}

const StudyPieChart: React.FC<OwnProps> = ({ data }) => {
  return (
    <PieChart width={200} height={200}>
      <Legend
        height={13}
        iconType="circle"
        layout="vertical"
        align="right"
        verticalAlign="top"
        iconSize={10}
        formatter={renderColorfulLegendText}
      />
      <Pie
        data={data}
        cx={50}
        cy={50}
        innerRadius={25}
        outerRadius={50}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default StudyPieChart