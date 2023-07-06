import styled from 'styled-components'

const HOUR_HEIGHT = 17;
const HOUR_MARGIN_TOP = 10;

export const Wrapper = styled.div`
    width: calc(100% - 30px);
    border: 1px solid;
    margin:15px;
`

export const HGrid = styled.div`
    display: grid;
    grid-template-columns: ${({ first }) => first || ''} repeat(${({ cols }) => cols}, 1fr);
    text-align: center;
`

export const VGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(${({ rows }) => rows},1fr);
`

export const DayWrapper = styled.span`
    border: 1px solid gray;
`

export const Hour = styled.div`
    height: ${HOUR_HEIGHT}px;
    display: flex;
    align-items: center;

    &:first-child{
        margin-top: ${HOUR_MARGIN_TOP}px;
    }
`
