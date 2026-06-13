import { ACCENT } from './accent'

// Petite barre « X/N notions lues » (une notion ouverte = lue).
export default function ReadingProgress({ read, total, accentKey }) {
  const a = ACCENT[accentKey]
  const pct = total ? Math.round((read / total) * 100) : 0
  return (
    <div className="mb-4 rounded-xl border border-border bg-card px-4 py-3">
      <div className="mb-1.5 flex items-center justify-between text-[0.78rem] font-bold text-soft">
        <span>📖 Lecture du chapitre</span>
        <span className={a.text}>{read}/{total} notions</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-card2">
        <div
          className={'h-full rounded-full transition-[width] duration-500 ' + a.bg}
          style={{ width: pct + '%' }}
        />
      </div>
    </div>
  )
}
