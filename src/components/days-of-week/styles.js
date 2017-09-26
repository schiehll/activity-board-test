import { CapitalizedText } from 'common/styles'
import { dayCell } from 'config'

export const List = CapitalizedText.extend`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: ${7 * (dayCell.size + dayCell.spacing)}px;
  margin-right: 10px;
`
