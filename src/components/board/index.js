import React from 'react'
import { getBoardDates } from 'utils/dates'

const Board = () => {
  console.log('dates', getBoardDates())

  return (
    <div>Boards</div>
  )
}

export default Board
