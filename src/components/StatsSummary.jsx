import { STATUS_TYPES, STATUS_ORDER, STATUS_CLASSES } from '../utils/statusTypes.js'
import StatusIcon from './StatusIcon.jsx'

export default function StatsSummary({ stats }) {
  return (
    <div>
      <div className="mb-3 rounded-lg border border-office/30 bg-office-bg p-3">
        <span className="text-xs font-medium text-ink/60">Working days</span>
        <p className="mt-1 font-display text-2xl text-office">
          {stats.workingDays}
          <span className="ml-1 text-xs font-body font-normal text-ink/40">/ {stats.totalDays} total</span>
        </p>
        <p className="mt-0.5 text-[11px] text-ink/40">Excludes weekends, holidays, and leave</p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
        {STATUS_ORDER.map((key) => {
          const type = STATUS_TYPES[key]
          const classes = STATUS_CLASSES[key]
          const count = stats.counts[key]
          return (
            <div key={key} className={`rounded-lg border border-ink/10 p-3 ${classes.bg}`}>
              <div className="flex items-center gap-1.5">
                <StatusIcon status={key} className={`h-3.5 w-3.5 ${classes.text}`} />
                <span className="text-xs font-medium text-ink/60">{type.label}</span>
              </div>
              <p className={`mt-1 font-display text-2xl ${classes.text}`}>
                {count}
                <span className="ml-1 text-xs font-body font-normal text-ink/40">/ {stats.totalDays}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
