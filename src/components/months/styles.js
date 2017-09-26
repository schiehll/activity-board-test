import { CapitalizedText } from 'common/styles'
import { dayCell } from 'config'

export const List = CapitalizedText.extend`
  display: flex;
  justify-content: space-evenly;
  margin-left: 30px;
  margin-bottom: 10px;
  width: ${53 * (dayCell.size + dayCell.spacing)}px;
`
