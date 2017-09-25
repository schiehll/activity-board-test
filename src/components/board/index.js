import React from 'react'
import { getLast12Months } from 'utils/months'

const Board = () => {
  console.log('months', getLast12Months())

  return (
    <div>Boards</div>
  )
}

export default Board
