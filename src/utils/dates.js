import substractDays from 'date-fns/sub_days'
import eachDay from 'date-fns/each_day'
import lastDayOfMonth from 'date-fns/last_day_of_month'
import addDays from 'date-fns/add_days'
import compareAsc from 'date-fns/compare_asc'

export const monthNames = [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'
]

export const daysOfWeekNames = [
  'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
]

export const getDayOfWeekName = dayNumber => daysOfWeekNames[dayNumber - 1]
export const getDayOfWeekNumber = dayName => daysOfWeekNames.indexOf(dayName) + 1
export const getMonthName = monthNumber => monthNames[monthNumber - 1]
export const getMonthNumber = monthName => monthNames.indexOf(monthName) + 1

export const getLast12Months = (currentMonthNumber = null) => {
  const currentMonth = currentMonthNumber || new Date().getMonth() + 1
  let months = [...Array(12).keys()].map(month => month + 1)

  return [
    ...months.slice(currentMonth),
    ...months.slice(0, currentMonth)
  ].map(getMonthName)
}

export const getYearNumber = monthName => {
  const today = new Date()
  const monthNumber = getMonthNumber(monthName)
  return monthNumber > today.getMonth() + 1 ? today.getFullYear() - 1 : today.getFullYear()
}

export const getDayOfWeekFromFirstDayOfTheMonth = monthName => {
  const dayOfWeekNumber = new Date(
    `${getYearNumber(monthName)}/${getMonthNumber(monthName)}/01`
  ).getDay() + 1

  return getDayOfWeekName(dayOfWeekNumber)
}

export const getBoardStartDate = (dayOfWeekName, monthName) => {
  const referenceDay = new Date(`${getYearNumber(monthName)}/${getMonthNumber(monthName)}/01`)
  const dayOfWeekNumber = getDayOfWeekNumber(dayOfWeekName)
  const remainingDays = daysOfWeekNames.slice(0, dayOfWeekNumber - 1)

  return substractDays(referenceDay, remainingDays.length)
}

export const getBoardDates = () => {
  const months = getLast12Months()
  const currentMonth = months[months.length - 1]
  const yearNumber = getYearNumber(currentMonth)
  const dayOfWeek = getDayOfWeekFromFirstDayOfTheMonth(months[0])
  const startDate = getBoardStartDate(dayOfWeek, months[0])
  const endDate = lastDayOfMonth(new Date(`${yearNumber}/${currentMonth}/01`))

  return eachDay(startDate, addDays(endDate, 1)).sort(compareAsc)
}
