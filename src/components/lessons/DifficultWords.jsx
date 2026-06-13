import { useState } from 'react'
import Reveal from './Reveal'
import { ACCENT } from './accent'

// Bandeau « Mot difficile ? » : chaque terme dévoile son hint (français simple
// + darija quand le brief en fournit un). Cliquer/survoler ouvre l'info-bulle.
function Word({ word, accentKey }) {
  const a = ACCENT[accentKey]
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className={
        'group flex flex-col items-start rounded-xl border px-[12px] py-2 text-left transition-colors ' +
        a.chipBg
      }
      aria-expanded={open}
    >
      <span className="flex w-full items-center justify-between gap-2">
        <span className="text-[0.86rem] font-bold text-white">{word.term}</span>
        {word.darija && (
          <span dir="rtl" className="text-[0.85rem] text-soft">
            {word.darija}
          </span>
        )}
      </span>
      <span
        className={
          'overflow-hidden text-[0.8rem] leading-snug text-soft transition-all duration-200 ' +
          (open ? 'mt-1 max-h-24 opacity-100' : 'max-h-0 opacity-0')
        }
      >
        {word.hint}
      </span>
    </button>
  )
}

export default function DifficultWords({ words, accentKey }) {
  return (
    <Reveal>
      <section className="mb-[22px] rounded-2xl border border-border bg-card p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg">🗝️</span>
          <h3 className="text-[0.98rem] font-extrabold">Mot difficile ?</h3>
          <span className="text-[0.75rem] text-muted">(clique pour l’explication)</span>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {words.map((w) => (
            <Word key={w.term} word={w} accentKey={accentKey} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
