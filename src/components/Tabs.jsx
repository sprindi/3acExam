import { chapters } from '../data/resumes'

const TABS = [{ id: 'all', tabLabel: '📚 Tout' }, ...chapters]

export default function Tabs({ active, onChange }) {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap justify-center gap-[7px] border-b border-border bg-bg/[0.93] px-3 py-[11px] backdrop-blur-[10px]">
      {TABS.map((t) => {
        const on = active === t.id
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={
              'rounded-full border-[1.5px] px-4 py-2 text-[0.8rem] font-bold transition-[0.18s] ' +
              (on
                ? 'border-blue bg-blue text-white'
                : 'border-border bg-transparent text-muted hover:border-blue hover:text-blue')
            }
          >
            {t.tabLabel}
          </button>
        )
      })}
    </div>
  )
}
