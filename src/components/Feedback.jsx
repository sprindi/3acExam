// Encart de correction. `tone` : 'good' | 'bad' | 'warn'.
// `html` : contenu principal (HTML hardcodé). `tip` : encart 💡 piège optionnel.

const TONES = {
  good: 'bg-green/10 border-green/30 text-[#7ee8c9]',
  bad: 'bg-red/[0.08] border-red/25 text-[#ffa3a3]',
  warn: 'bg-yellow/[0.08] border-yellow/25 text-[#f0d68a]',
}

export default function Feedback({ tone, html, tip }) {
  return (
    <div
      className={
        'mt-3 rounded-[10px] border px-[14px] py-3 text-[0.85rem] leading-[1.65] [&_b]:text-white ' +
        TONES[tone]
      }
    >
      <span dangerouslySetInnerHTML={{ __html: html }} />
      {tip && (
        <span className="mt-[7px] block border-t border-dashed border-white/[0.12] pt-[7px] text-[0.82rem] italic text-soft">
          💡 {tip}
        </span>
      )}
    </div>
  )
}
