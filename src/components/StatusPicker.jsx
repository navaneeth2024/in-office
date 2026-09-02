import { STATUS_TYPES, STATUS_ORDER, STATUS_CLASSES } from '../utils/statusTypes.js'
import StatusIcon from './StatusIcon.jsx'

export default function StatusPicker({ dateLabel, currentStatus, onSelect, onClear, onClose }) {
  return (
    <div
      className="absolute z-20 mt-1 w-48 rounded-lg border border-ink/10 bg-panel p-2 shadow-lg shadow-black/40"
      role="menu"
    >
      <p className="px-2 pb-2 pt-1 text-sm font-medium text-ink/70">{dateLabel}</p>
      <div className="flex flex-col gap-1">
        {STATUS_ORDER.map((key) => {
          const type = STATUS_TYPES[key]
          const classes = STATUS_CLASSES[key]
          const active = currentStatus === key
          return (
            <button
              key={key}
              role="menuitem"
              onClick={() => {
                onSelect(key)
                onClose()
              }}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${classes.hoverBg} ${
                active ? `${classes.bg} font-medium` : ''
              }`}
            >
              <StatusIcon status={key} className={`h-3.5 w-3.5 ${classes.text}`} />
              {type.label}
            </button>
          )
        })}
        {currentStatus && (
          <button
            role="menuitem"
            onClick={() => {
              onClear()
              onClose()
            }}
            className="mt-1 rounded-md px-2 py-1.5 text-left text-sm text-ink/50 hover:bg-ink/5"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
