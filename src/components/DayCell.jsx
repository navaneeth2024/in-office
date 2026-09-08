import { useState, useRef, useEffect } from 'react'
import StatusPicker from './StatusPicker.jsx'
import StatusIcon from './StatusIcon.jsx'
import HolidayThemeIcon from './HolidayThemeIcon.jsx'
import { STATUS_CLASSES, STATUS_TYPES } from '../utils/statusTypes.js'
import { getHolidayInfo } from '../utils/holidaysData.js'
import { HOLIDAY_THEMES } from '../utils/holidayThemes.js'

export default function DayCell({ day, onSetStatus }) {
  const [open, setOpen] = useState(false)
  const cellRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e) {
      if (cellRef.current && !cellRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const classes = day.status ? STATUS_CLASSES[day.status] : null
  const dateLabel = day.date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  // Holiday info is looked up regardless of current status, so the picker
  // can hint "This is Christmas" even on an otherwise-blank day.
  const holidayInfo = getHolidayInfo(day.key)
  const theme = day.status === 'holiday' && holidayInfo?.theme ? HOLIDAY_THEMES[holidayInfo.theme] : null

  const cellStyle = theme ? { backgroundColor: `${theme.color}22`, borderColor: `${theme.color}55` } : undefined
  const accentStyle = theme ? { color: theme.color } : undefined

  return (
    <div ref={cellRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        style={cellStyle}
        className={`flex aspect-square w-full flex-col items-start justify-between rounded-md border p-1.5 text-left transition-colors sm:p-2 ${
          day.inCurrentMonth ? 'border-ink/10' : 'border-transparent opacity-35'
        } ${theme ? '' : classes ? classes.bg : 'bg-panel hover:bg-ink/10'} ${
          day.isToday ? 'ring-2 ring-office ring-offset-1 ring-offset-paper' : ''
        }`}
      >
        <span
          className={`text-xs font-medium sm:text-sm ${theme ? '' : classes ? classes.text : 'text-ink/60'}`}
          style={accentStyle}
        >
          {day.date.getDate()}
        </span>
        {classes && (
          <span
            className={`hidden items-center gap-1 text-[10px] font-medium sm:flex ${theme ? '' : classes.text}`}
            style={accentStyle}
          >
            {theme ? (
              <HolidayThemeIcon themeKey={holidayInfo.theme} className="h-3 w-3" />
            ) : (
              <StatusIcon status={day.status} className="h-3 w-3" />
            )}
            {theme ? theme.label : STATUS_TYPES[day.status].label}
          </span>
        )}
        {classes && (
          <span className={`sm:hidden ${theme ? '' : classes.text}`} style={accentStyle}>
            {theme ? (
              <HolidayThemeIcon themeKey={holidayInfo.theme} className="h-3.5 w-3.5" />
            ) : (
              <StatusIcon status={day.status} className="h-3.5 w-3.5" />
            )}
          </span>
        )}
      </button>
      {open && (
        <StatusPicker
          dateLabel={dateLabel}
          currentStatus={day.isOverride ? day.status : null}
          holidayHint={holidayInfo}
          onSelect={(status) => onSetStatus(day.key, status)}
          onClear={() => onSetStatus(day.key, null)}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
