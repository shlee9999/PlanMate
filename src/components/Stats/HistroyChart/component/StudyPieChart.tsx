import React, { PureComponent } from 'react'
import { PieChart, Pie, Legend, Cell } from 'recharts'

const data = [
  { name: '국어', value: 400, fill: '#0088FE' },
  { name: '영어', value: 300, fill: '#00C49F' },
  { name: '수학', value: 300, fill: '#FFBB28' },
  { name: '과학', value: 200, fill: '#FF8042' },
]

const renderColorfulLegendText = (value: string, entry: any) => {
  return <span style={{ color: '#666666', fontWeight: 400, padding: '10px' }}>{value}</span>
}

export default class StudyPieChart extends PureComponent {
  render() {
    return (
      <PieChart width={100} height={100}>
        <Legend
          height={13}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          formatter={renderColorfulLegendText}
        />
        <Pie
          data={data}
          cx={40}
          cy={50}
          innerRadius={20}
          outerRadius={45}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    )
  }
}
