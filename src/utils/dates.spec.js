import lastDayOfMonth from 'date-fns/last_day_of_month'
import isSameDay from 'date-fns/is_same_day'
import {
  monthNames,
  getLast12Months,
  getYearNumber,
  getBoardDates,
  getBoardDatesPerWeek
} from './dates'

describe('dates', () => {
  describe('getLast12Months', () => {
    it('should return the last 12 months from the current or given one', () => {
      let months = getLast12Months(6)

      expect(months.length).toBe(12)
      expect(months[0]).toBe('jul')
      expect(months[11]).toBe('jun')

      months = getLast12Months()
      const currentMounth = new Date().getMonth()

      expect(months.length).toBe(12)
      expect(months[11]).toBe(monthNames[currentMounth])
    })
  })

  describe('getYearNumber', () => {
    it('should return the year of the given month using the current month as reference', () => {
      const currentYear = new Date().getFullYear()
      let yearNumber = getYearNumber('jul')

      expect(yearNumber).toBe(currentYear)

      yearNumber = getYearNumber('dec')
      expect(yearNumber).toBe(currentYear - 1)
    })
  })

  describe('getBoardDates', () => {
    it('should return an array of dates for the board using the current date as reference', () => {
      const boardDates = getBoardDates()
      const lastDate = lastDayOfMonth(new Date())

      expect(boardDates.length).toBe(371)
      expect(isSameDay(boardDates[370], lastDate)).toBe(true)
    })
  })

  describe('getBoardDatesPerWeek', () => {
    it('should return an object with array of dates by weeks', () => {
      const boardDates = getBoardDatesPerWeek()

      expect(Object.keys(boardDates).length).toBe(53)
      expect(boardDates[0].length).toBe(7)
      expect(boardDates[52].length).toBe(7)
    })
  })
})
