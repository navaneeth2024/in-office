import { useState, useRef, useEffect } from 'react'
import StatusPicker from './StatusPicker.jsx'
import StatusIcon from './StatusIcon.jsx'
import { STATUS_CLASSES, STATUS_TYPES } from '../utils/statusTypes.js'

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
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const classes = day.status ? STATUS_CLASSES[day.status] : null
  const dateLabel = day.date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div ref={cellRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`flex aspect-square w-full flex-col items-start justify-between rounded-md border p-1.5 text-left transition-colors sm:p-2 ${
          day.inCurrentMonth ? 'border-ink/10' : 'border-transparent opacity-35'
        } ${classes ? classes.bg : 'bg-panel hover:bg-ink/10'} ${
          day.isToday ? 'ring-2 ring-office ring-offset-1 ring-offset-paper' : ''
        }`}
      >
        <span className={`text-xs font-medium sm:text-sm ${classes ? classes.text : 'text-ink/60'}`}>
          {day.date.getDate()}
        </span>
        {classes && (
          <span className={`hidden items-center gap-1 text-[10px] font-medium sm:flex ${classes.text}`}>
            <StatusIcon status={day.status} className="h-3 w-3" />
            {STATUS_TYPES[day.status].label}
          </span>
        )}
        {classes && (
          <span className={`sm:hidden ${classes.text}`}>
            <StatusIcon status={day.status} className="h-3.5 w-3.5" />
          </span>
        )}
      </button>
      {open && (
        <StatusPicker
          dateLabel={dateLabel}
          currentStatus={day.isOverride ? day.status : null}
          onSelect={(status) => onSetStatus(day.key, status)}
          onClear={() => onSetStatus(day.key, null)}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
