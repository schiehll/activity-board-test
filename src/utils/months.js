export const monthNames = [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'
]

export const getLast12Months = (currentMonthNumber = null) => {
  const currentMonth = currentMonthNumber || new Date().getMonth() + 1
  let months = [...Array(12).keys()].map(month => month + 1)

  return [
    ...months.slice(currentMonth),
    ...months.slice(0, currentMonth)
  ].map(month => monthNames[month - 1])
}
