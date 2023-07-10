import React from 'react'
import { ResponsiveBump } from '@nivo/bump'

const bumpdata = [
  {
    id: 'nowTimer',
    data: [
      {
        x: '5:00',
        y: 2,
      },
      {
        x: '11:00',
        y: 4,
      },
      {
        x: '17:00',
        y: 6,
      },
      {
        x: '23:00',
        y: 8,
      },
      {
        x: '5:00',
        y: 12,
      },
    ],
  },
]

const Bump = () => (
  <ResponsiveBump
    data={bumpdata}
    colors={{ scheme: 'spectral' }}
    lineWidth={3}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    pointSize={7}
    activePointSize={10}
    inactivePointSize={0}
    pointColor="#5bd780"
    pointBorderWidth={2}
    activePointBorderWidth={1}
    pointBorderColor={{ from: 'serie.color' }}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -36,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'ranking',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    axisRight={null}
  />
)

export const BumpGraph = () => {
  return <Bump />
}
