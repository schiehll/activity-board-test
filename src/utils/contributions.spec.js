import { colors } from 'config'
import {
  getContributionsOnDate,
  getContributionsRanges,
  getDayColor
} from './contributions'

describe('contributions', () => {
  let data = []

  beforeEach(() => {
    data = [
      {
        date: '2017-08-10',
        count: 5
      },
      {
        date: '2017-09-12',
        count: 15
      },
      {
        date: '2017-11-22',
        count: 20
      }
    ]
  })

  describe('getContributionsOnDate', () => {
    it('should return the contribution count for the given day', () => {
      let date = new Date('2017-08-10')
      let contributionsCount = getContributionsOnDate(date, data)

      expect(contributionsCount).toBe(5)

      date = new Date('2017-11-22')
      contributionsCount = getContributionsOnDate(date, data)

      expect(contributionsCount).toBe(20)

      date = new Date('2017-12-22')
      contributionsCount = getContributionsOnDate(date, data)

      expect(contributionsCount).toBe(0)
    })
  })

  describe('getContributionsRanges', () => {
    it('should return the ranges given the contributions data', () => {
      const ranges = getContributionsRanges(data)

      expect(ranges.length).toBe(3)
    })
  })

  describe('getDayColor', () => {
    it('should return the color string based on given ranges and count', () => {
      const ranges = getContributionsRanges(data)
      let count = 0
      let color = getDayColor(ranges, count)

      expect(color).toBe(colors.dayCellBg)

      count = 19
      color = getDayColor(ranges, count)
      expect(color).toBe(colors.dayCellRange4)

      count = 6
      color = getDayColor(ranges, count)
      expect(color).toBe(colors.dayCellRange2)

      count = 2
      color = getDayColor(ranges, count)
      expect(color).toBe(colors.dayCellRange1)
    })
  })
})
