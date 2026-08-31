// All dates are keyed as local "YYYY-MM-DD" strings throughout the app.

export function toKey(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function isWeekend(date) {
  const day = date.getDay()
  return day === 0 || day === 6
}

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

/**
 * Builds a flat array of day objects covering the full weeks that make up
 * a given month (including leading/trailing days from adjacent months so
 * the grid always has complete weeks, Monday-first).
 */
export function buildMonthGrid(year, monthIndex) {
  const firstOfMonth = new Date(year, monthIndex, 1)
  const startOffset = (firstOfMonth.getDay() + 6) % 7 // Monday = 0
  const gridStart = new Date(year, monthIndex, 1 - startOffset)

  const days = []
  const cursor = new Date(gridStart)
  // Always render 6 full weeks (42 days) for a stable grid height
  for (let i = 0; i < 42; i++) {
    days.push({
      date: new Date(cursor),
      key: toKey(cursor),
      inCurrentMonth: cursor.getMonth() === monthIndex,
      isWeekend: isWeekend(cursor),
      isToday: toKey(cursor) === toKey(new Date()),
    })
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}
