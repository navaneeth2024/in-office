// Single place to define the day-type vocabulary. Add a new status by
// adding an entry here â€” the picker, calendar, and stats all read from it.

export const STATUS_TYPES = {
  office: { label: 'In-office', short: 'O', color: 'office' },
  remote: { label: 'Remote', short: 'R', color: 'remote' },
  leave: { label: 'Leave', short: 'L', color: 'leave' },
  holiday: { label: 'Holiday', short: 'H', color: 'holiday' },
  weekend: { label: 'Weekend', short: 'W', color: 'weekend' },
}

export const STATUS_ORDER = ['office', 'remote', 'leave', 'holiday', 'weekend']

// Effective status for a day: an explicit override wins, otherwise weekends
// default to "weekend" and weekdays are left unset (blank/unplanned).
export function effectiveStatus(dayMeta, override) {
  if (override) return override
  if (dayMeta.isWeekend) return 'weekend'
  return null
}

// Tailwind's content scanner needs full literal class strings, so any
// `bg-${color}-...` interpolation elsewhere would silently fail to compile.
// Every component that colors a status by key should import from here.
export const STATUS_CLASSES = {
  office: { dot: 'bg-office', bg: 'bg-office-bg', hoverBg: 'hover:bg-office-bg', text: 'text-office', ring: 'ring-office' },
  remote: { dot: 'bg-remote', bg: 'bg-remote-bg', hoverBg: 'hover:bg-remote-bg', text: 'text-remote', ring: 'ring-remote' },
  leave: { dot: 'bg-leave', bg: 'bg-leave-bg', hoverBg: 'hover:bg-leave-bg', text: 'text-leave', ring: 'ring-leave' },
  holiday: { dot: 'bg-holiday', bg: 'bg-holiday-bg', hoverBg: 'hover:bg-holiday-bg', text: 'text-holiday', ring: 'ring-holiday' },
  weekend: { dot: 'bg-weekend', bg: 'bg-weekend-bg', hoverBg: 'hover:bg-weekend-bg', text: 'text-weekend', ring: 'ring-weekend' },
}
