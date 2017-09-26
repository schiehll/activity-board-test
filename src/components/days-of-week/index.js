import React from 'react'
import { daysOfWeekNames } from 'utils/dates'
import { List } from './styles'

const DaysOfWeek = () => (
  <List>
    {daysOfWeekNames.map((day, index) => {
      if (index % 2 !== 0) {
        return <span key={day}>{day}</span>
      }
    })}
  </List>
)

export default DaysOfWeek
