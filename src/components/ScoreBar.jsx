import { TOTAL } from '../data/exercices'
import { useScore } from '../hooks/useScore'

export default function ScoreBar() {
  const { counts } = useScore()

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex flex-wrap items-center justify-center gap-[22px] border-t border-border bg-surface/[0.96] px-[18px] py-[11px] text-[0.82rem] backdrop-blur-[10px]">
      <div className="flex items-center gap-[7px]">
        <span className="h-[9px] w-[9px] rounded-full bg-green" />
        Justes : <b className="font-extrabold">{counts.correct}</b>
      </div>
      <div className="flex items-center gap-[7px]">
        <span className="h-[9px] w-[9px] rounded-full bg-red" />
        Faux : <b className="font-extrabold">{counts.wrong}</b>
      </div>
      <div className="flex items-center gap-[7px] text-muted">
        Faits : <b className="font-extrabold">{counts.done}</b>/{TOTAL}
      </div>
    </div>
  )
}
