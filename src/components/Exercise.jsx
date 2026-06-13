import { useState } from 'react'
import QCM from './QCM'
import TrueFalse from './TrueFalse'
import Matching from './Matching'

const BADGES = {
  facile: { label: 'FACILE', cls: 'bg-green/15 text-green' },
  moyen: { label: 'MOYEN', cls: 'bg-yellow/15 text-yellow' },
  difficile: { label: 'DIFFICILE', cls: 'bg-red/15 text-red' },
}

const BODIES = {
  qcm: QCM,
  truefalse: TrueFalse,
  matching: Matching,
}

export default function Exercise({ ex }) {
  const [open, setOpen] = useState(false)
  const badge = BADGES[ex.difficulty]
  const Body = BODIES[ex.type]

  return (
    <div className="mb-3 overflow-hidden rounded-[13px] border border-border bg-card transition-[border-color] hover:border-[#3c4a72]">
      <div
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer select-none items-center gap-[10px] px-[15px] py-[13px]"
      >
        <span
          className={
            'flex-shrink-0 rounded-full px-[9px] py-[3px] text-[0.65rem] font-extrabold tracking-[0.3px] ' +
            badge.cls
          }
        >
          {badge.label}
        </span>
        <span className="flex-1 text-[0.9rem] font-semibold">{ex.question}</span>
        <span className="hidden max-w-[110px] flex-shrink-0 text-right text-[0.67rem] leading-[1.3] text-muted sm:block">
          {ex.source}
        </span>
        <span
          className={
            'flex-shrink-0 text-[0.72rem] text-muted transition-transform duration-200 ' +
            (open ? 'rotate-180' : '')
          }
        >
          ▼
        </span>
      </div>
      {open && (
        <div className="px-[15px] pb-[15px]">
          <Body ex={ex} />
        </div>
      )}
    </div>
  )
}
