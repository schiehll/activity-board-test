import { monthNames, getLast12Months } from './dates'

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
})
