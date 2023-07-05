import React from 'react'
import { range } from './utils'
import { Wrapper, HGrid, VGrid, DayWrapper, Hour } from './styled'

const DAYS = ['월', '화', '수', '목', '금', '토', '일']
const TIMES = ['오전 5시', '오전 6시', '오전 7시', '오전 8시', '오전 9시', '오전 10시',
    '오전 11시', '오후 12시', '오후 1시', '오후 2시', '오후 3시', '오후 4시',
    '오후 5시', '오후 6시', '오후 7시', '오후 8시', '오후 9시', '오후 10시',
    '오후 11시', '오전 12시', '오전 1시', '오전 2시', '오전 3시', '오전 4시'
]


export const WeeklyCalendar = () => {
    return (
        <Wrapper>
            <HGrid first={'100px'} cols={1}>
                <VGrid rows={24}>
                    {TIMES.map((hour) => (
                        <Hour>{hour}</Hour>
                    ))}
                </VGrid>
                <HGrid cols={7}>
                    {
                        DAYS.map((day) => (
                            <DayWrapper>
                                <p>{day}</p>
                            </DayWrapper>
                        ))
                    }
                </HGrid>
            </HGrid>
        </Wrapper>
    )
}
