import DayCell from './DayCell.jsx'
import { WEEKDAY_LABELS } from '../utils/dateHelpers.js'

export default function Calendar({ days, onSetStatus }) {
  return (
    <div>
      <div className="mb-1 grid grid-cols-7 gap-1 sm:gap-2">
        {WEEKDAY_LABELS.map((label) => (
          <div key={label} className="px-1 text-xs font-medium text-ink/40 sm:text-sm">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {days.map((day) => (
          <DayCell key={day.key} day={day} onSetStatus={onSetStatus} />
        ))}
      </div>
    </div>
  )
}
