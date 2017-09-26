import { Week, Day } from 'components/board/styles'
import { CapitalizedText } from 'common/styles'
import { dayCell } from 'config'

export const List = Week.extend`
  display: flex;
  justify-content: flex-end;
  width: ${53 * (dayCell.size + dayCell.spacing) + 30}px;
  margin-top: 10px;
`

export const Item = Day.extend`
  margin: 0 ${dayCell.spacing}px;
`

export const Text = CapitalizedText.extend`
  margin: 0 10px;
`
