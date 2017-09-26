import { colors } from 'config'
import contributionsData from 'data/data.json'
import isSameDay from 'date-fns/is_same_day'

export const getContributionsOnDate = (date, data = null) => {
  const dataArray = data || contributionsData
  const index = dataArray.findIndex(contribution => (
    isSameDay(new Date(date), new Date(contribution.date))
  ))

  if (index >= 0) {
    return dataArray[index].count
  }

  delete dataArray[index]
  return 0
}

export const getContributionsRanges = (data = null) => {
  const dataArray = data || contributionsData
  const sorted = dataArray.sort((a, b) => a.count - b.count)
  const max = parseInt(sorted[sorted.length - 1].count)

  return [
    Math.floor(max * 25 / 100),
    Math.floor(max * 50 / 100),
    Math.floor(max * 75 / 100)
  ]
}

export const getDayColor = (ranges, count) => {
  if (count === 0) return colors.dayCellBg
  if (count <= ranges[0]) return colors.dayCellRange1
  if (count > ranges[0] && count <= ranges[1]) return colors.dayCellRange2
  if (count > ranges[1] && count <= ranges[2]) return colors.dayCellRange3
  if (count > ranges[2]) return colors.dayCellRange4
}
