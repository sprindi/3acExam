import { ACCENT } from './accent'

// Sommaire cliquable. Sticky sur desktop (colonne de gauche), simple liste sur mobile.
// Cliquer ouvre la notion (onSelect) puis scrolle dessus (ancre #id).
export default function Toc({ notions, accentKey, onSelect }) {
  const a = ACCENT[accentKey]
  return (
    <nav className="rounded-2xl border border-border bg-card p-4 lg:sticky lg:top-[72px]">
      <p className="mb-3 text-[0.72rem] font-extrabold uppercase tracking-[1px] text-muted">
        Sommaire
      </p>
      <ul className="space-y-1">
        {notions.map((n) => (
          <li key={n.id}>
            <a
              href={'#' + n.id}
              onClick={() => onSelect && onSelect(n.id)}
              className={
                'flex items-start gap-2 rounded-lg px-2 py-[7px] text-[0.83rem] text-soft transition-colors hover:bg-card2 ' +
                a.hoverText
              }
            >
              <span className={'font-bold ' + a.text}>{n.num}</span>
              <span className="leading-snug">{n.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
