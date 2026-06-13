import { useState } from 'react'

const LABEL_TONE = {
  cy: 'text-green',
  bl: 'text-blue',
  ye: 'text-yellow',
}

function Block({ block }) {
  return (
    <div className="mb-[14px] last:mb-0">
      <span
        className={
          'mb-[5px] inline-flex items-center gap-[6px] text-[0.85rem] font-extrabold ' +
          LABEL_TONE[block.tone]
        }
      >
        {block.label}
      </span>

      {block.html && (
        <p
          className="text-[0.9rem] leading-[1.7] text-soft [&_b]:text-white"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )}

      {block.words && (
        <div className="mt-[6px] flex flex-wrap gap-[7px]">
          {block.words.map((w, i) => (
            <span
              key={i}
              className="rounded-[7px] border border-blue/25 bg-blue/10 px-[10px] py-1 text-[0.8rem] text-[#9bc0ff] [&_b]:font-bold [&_b]:text-white"
              dangerouslySetInnerHTML={{ __html: w }}
            />
          ))}
        </div>
      )}

      {block.mustHtml && (
        <div className="rounded-[10px] border border-yellow/25 bg-yellow/[0.08] px-[14px] py-[11px]">
          <p
            className="text-[#f0e3c0] [&_b]:text-white"
            dangerouslySetInnerHTML={{ __html: block.mustHtml }}
          />
        </div>
      )}
    </div>
  )
}

export default function ResumeCard({ blocks }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-[18px] overflow-hidden rounded-[14px] border border-border bg-card">
      <div
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer select-none items-center gap-[10px] bg-card2 px-4 py-[14px]"
      >
        <span>📖</span>
        <span className="flex-1 text-[0.95rem] font-extrabold">Résumé simple</span>
        <span
          className={
            'text-[0.75rem] text-muted transition-transform duration-200 ' +
            (open ? 'rotate-180' : '')
          }
        >
          ▼
        </span>
      </div>
      {open && (
        <div className="px-[18px] py-4">
          {blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      )}
    </div>
  )
}
