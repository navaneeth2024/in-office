import { useEffect, useState } from 'react'
import { KERALA_HOLIDAYS_2026 } from '../utils/holidaysData.js'

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export default function SuggestedHolidaysModal({ open, allDays, onApply, onClose }) {
  const [checked, setChecked] = useState({})

  useEffect(() => {
    if (!open) return
    const initial = {}
    KERALA_HOLIDAYS_2026.forEach((h) => {
      initial[h.date] = allDays[h.date] === 'holiday'
    })
    setChecked(initial)
  }, [open, allDays])

  useEffect(() => {
    if (!open) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  function toggle(date) {
    setChecked((c) => ({ ...c, [date]: !c[date] }))
  }

  function handleApply() {
    const selectedDates = Object.entries(checked)
      .filter(([, v]) => v)
      .map(([date]) => date)
    onApply(selectedDates)
    onClose()
  }

  const official = KERALA_HOLIDAYS_2026.filter((h) => h.official)
  const extra = KERALA_HOLIDAYS_2026.filter((h) => !h.official)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="holidays-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="flex max-h-[80vh] w-full max-w-md flex-col rounded-lg border border-ink/10 bg-panel p-5 shadow-xl shadow-black/40">
        <h2 id="holidays-modal-title" className="font-display text-lg text-ink">
          Kerala holidays, 2026
        </h2>
        <p className="mt-1 text-sm text-ink/50">
          Tick only the ones that are actual holidays for you, then apply. Nothing changes until you do.
        </p>

        <div className="mt-4 flex-1 overflow-y-auto pr-1">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-ink/40">
            Official (Kerala Govt.)
          </p>
          <div className="mb-4 flex flex-col gap-0.5">
            {official.map((h) => (
              <label
                key={h.date}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-ink/5"
              >
                <input
                  type="checkbox"
                  checked={Boolean(checked[h.date])}
                  onChange={() => toggle(h.date)}
                  className="h-4 w-4 accent-office"
                />
                <span className="w-12 shrink-0 text-ink/40">{formatDate(h.date)}</span>
                <span className="text-ink/80">{h.name}</span>
                {h.sunday && <span className="ml-auto shrink-0 text-xs text-ink/30">Sun</span>}
              </label>
            ))}
          </div>

          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-ink/40">
            Other common dates
          </p>
          <div className="flex flex-col gap-0.5">
            {extra.map((h) => (
              <label
                key={h.date}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-ink/5"
              >
                <input
                  type="checkbox"
                  checked={Boolean(checked[h.date])}
                  onChange={() => toggle(h.date)}
                  className="h-4 w-4 accent-office"
                />
                <span className="w-12 shrink-0 text-ink/40">{formatDate(h.date)}</span>
                <span className="text-ink/80">{h.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2 border-t border-ink/10 pt-4">
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-ink/60 transition-colors hover:bg-ink/10 hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="rounded-md bg-office px-3 py-1.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Apply selected
          </button>
        </div>
      </div>
    </div>
  )
}
