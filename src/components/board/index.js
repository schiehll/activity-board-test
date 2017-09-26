import React from 'react'
import format from 'date-fns/format'
import { getBoardDatesPerWeek } from 'utils/dates'
import { getDayColor, getContributionsOnDate, getContributionsRanges } from 'utils/contributions'
import { Wrapper, Week, Day } from './styles'
import Months from 'components/months'
import DaysOfWeek from 'components/days-of-week'
import Legend from 'components/legend'

const Board = () => {
  const boardDatesPerWeek = getBoardDatesPerWeek()
  const ranges = getContributionsRanges()

  return (
    <div>
      <Months />
      <Wrapper>
        <DaysOfWeek />
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
      <Legend />
    </div>
  )
}

export default Board
