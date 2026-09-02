import { useCallback, useMemo, useState } from 'react'
import { buildMonthGrid } from '../utils/dateHelpers.js'
import { loadAllDays, setDayStatus as persistDayStatus, replaceAllDays, clearAllDays } from '../utils/storage.js'
import { effectiveStatus, STATUS_ORDER } from '../utils/statusTypes.js'

export function useMonthData(year, monthIndex) {
  const [allDays, setAllDays] = useState(() => loadAllDays())

  const grid = useMemo(() => buildMonthGrid(year, monthIndex), [year, monthIndex])

  const days = useMemo(
    () =>
      grid.map((day) => ({
        ...day,
        status: effectiveStatus(day, allDays[day.key]),
        isOverride: Boolean(allDays[day.key]),
      })),
    [grid, allDays],
  )

  const setStatus = useCallback((dateKey, status) => {
    const updated = persistDayStatus(dateKey, status)
    setAllDays({ ...updated })
  }, [])

  const importAll = useCallback((data) => {
    const updated = replaceAllDays(data)
    setAllDays({ ...updated })
  }, [])

  const clearAll = useCallback(() => {
    const updated = clearAllDays()
    setAllDays({ ...updated })
  }, [])

  const monthStats = useMemo(() => {
    const counts = Object.fromEntries(STATUS_ORDER.map((s) => [s, 0]))
    let planned = 0
    for (const day of days) {
      if (!day.inCurrentMonth) continue
      if (day.status) {
        counts[day.status] += 1
        planned += 1
      }
    }
    return { counts, planned, totalDays: days.filter((d) => d.inCurrentMonth).length }
  }, [days])

  return { days, setStatus, monthStats, allDays, importAll, clearAll }
}
