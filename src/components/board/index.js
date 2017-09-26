import React from 'react'
import styled, { injectGlobal, css } from 'styled-components'
import { getBoardDatesPerWeek } from 'utils/dates'
import isSameDay from 'date-fns/is_same_day'
import format from 'date-fns/format'
import contributionsData from 'data/data.json'

const cellSize = 10
const cellSpacing = 2

injectGlobal`
  body {
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${53 * (cellSize + cellSpacing)}px;
`

const Week = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Day = styled.li`${
  ({ color }) => css`
    width: ${cellSize}px;
    height: ${cellSize}px;
    background-color: ${color};
    margin: ${cellSpacing}px 0;
  `
}`

const getContributionsRanges = () => {
  const sorted = contributionsData.sort((a, b) => a.count - b.count)
  const max = parseInt(sorted[sorted.length - 1].count)

  return [
    Math.floor(max * 25 / 100),
    Math.floor(max * 50 / 100),
    Math.floor(max * 75 / 100)
  ]
}

const getDayColor = (ranges, count) => {
  if (count === 0) return '#ebedf0'
  if (count <= ranges[0]) return '#c6e48b'
  if (count > ranges[0] && count <= ranges[1]) return '#7bc96f'
  if (count > ranges[1] && count <= ranges[2]) return '#239a3b'
  if (count > ranges[2]) return '#196127'
}

const getContributionsOnDate = date => {
  const index = contributionsData.findIndex(contribution => (
    isSameDay(new Date(date), new Date(contribution.date))
  ))

  if (index >= 0) {
    return contributionsData[index].count
  }

  delete contributionsData[index]
  return 0
}

const Board = () => {
  const boardDatesPerWeek = getBoardDatesPerWeek()
  const ranges = getContributionsRanges()

  return (
    <Wrapper>
      {Object.keys(boardDatesPerWeek).map(week => (
        <Week key={week}>
          {boardDatesPerWeek[week].map((date, index) => {
            const contributionsCount = getContributionsOnDate(date)

            return (
              <Day
                key={`${week}-${index}`}
                title={`${contributionsCount} contributions on ${format(date, 'MMM DD, YYYY')}`}
                color={getDayColor(ranges, contributionsCount)}
              />
            )
          })}
        </Week>
      ))}
    </Wrapper>
  )
}

export default Board
