import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import StatsSummary from './components/StatsSummary.jsx'
import BackupControls from './components/BackupControls.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { useMonthData } from './hooks/useMonthData.js'
import { useTheme } from './hooks/useTheme.js'
import { MONTH_NAMES } from './utils/dateHelpers.js'

const today = new Date()

export default function App() {
  const [year, setYear] = useState(today.getFullYear())
  const [monthIndex, setMonthIndex] = useState(today.getMonth())

  const { days, setStatus, monthStats, allDays, importAll, clearAll } = useMonthData(year, monthIndex)
  const { theme, toggleTheme } = useTheme()

  function shiftMonth(delta) {
    const next = new Date(year, monthIndex + delta, 1)
    setYear(next.getFullYear())
    setMonthIndex(next.getMonth())
  }

  function goToToday() {
    setYear(today.getFullYear())
    setMonthIndex(today.getMonth())
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">In-Office</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={goToToday}
            className="text-sm font-medium text-ink/50 underline decoration-ink/20 underline-offset-4 hover:text-ink"
          >
            Today
          </button>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => shiftMonth(-1)}
          aria-label="Previous month"
          className="rounded-md p-2 text-ink/50 hover:bg-ink/5 hover:text-ink"
        >
          ←
        </button>
        <h2 className="font-display text-xl text-ink sm:text-2xl">
          {MONTH_NAMES[monthIndex]} {year}
        </h2>
        <button
          onClick={() => shiftMonth(1)}
          aria-label="Next month"
          className="rounded-md p-2 text-ink/50 hover:bg-ink/5 hover:text-ink"
        >
          →
        </button>
      </div>

      <Calendar days={days} onSetStatus={setStatus} />

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-medium text-ink/50">This month</h3>
        <StatsSummary stats={monthStats} />
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-4">
        <p className="text-xs text-ink/40">Data is stored only on this device.</p>
        <BackupControls allDays={allDays} onImport={importAll} onClearAll={clearAll} />
      </div>
    </div>
  )
}
