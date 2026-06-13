import { TOTAL } from '../data/exercices'
import { useScore } from '../hooks/useScore'

export default function ProgressBar() {
  const { counts } = useScore()
  const pct = Math.round((counts.done / TOTAL) * 100)
  const label =
    counts.done > 1 ? `${counts.done} exercices faits` : `${counts.done} exercice fait`

  return (
    <div className="mb-6 mt-1">
      <div className="h-[7px] overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green to-blue transition-[width] duration-[400ms]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[0.78rem] text-muted">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
    </div>
  )
}
