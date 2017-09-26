import React from 'react'
import { getLast12Months } from 'utils/dates'
import { List } from './styles'

const Months = () => (
  <List>
    {getLast12Months().map(month => (
      <span key={month}>{month}</span>
    ))}
  </List>
)

export default Months
