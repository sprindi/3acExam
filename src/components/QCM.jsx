import { useState } from 'react'
import { useScore } from '../hooks/useScore'
import Feedback from './Feedback'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function QCM({ ex }) {
  const { results, setResult, clearResult } = useScore()
  const locked = ex.id in results
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState(null)

  function pick(i) {
    if (locked) return
    setSelected(i)
  }

  function check() {
    if (locked) return
    if (selected === null) {
      setFeedback({ tone: 'warn', html: "⚠️ Choisis une réponse d'abord." })
      return
    }
    const ok = selected === ex.correct
    setResult(ex.id, ok ? 'correct' : 'wrong')
    setFeedback({
      tone: ok ? 'good' : 'bad',
      html: (ok ? '✅ Bravo ! ' : '❌ Faux. ') + ex.explanation,
      tip: ex.tip,
    })
  }

  function reset() {
    setSelected(null)
    setFeedback(null)
    clearResult(ex.id)
  }

  return (
    <>
      <div className="my-3 flex flex-col gap-[7px]">
        {ex.options.map((opt, i) => {
          let cls =
            'border-border bg-surface hover:border-blue hover:bg-blue/[0.06]'
          if (locked) {
            if (i === ex.correct) cls = 'border-green bg-green/[0.12] text-green'
            else if (i === selected) cls = 'border-red bg-red/[0.12] text-red'
            else cls = 'border-border bg-surface'
          } else if (i === selected) {
            cls = 'border-blue bg-blue/[0.12]'
          }
          return (
            <div
              key={i}
              onClick={() => pick(i)}
              className={
                'flex items-center gap-[11px] rounded-[9px] border-[1.5px] px-[14px] py-[11px] text-[0.88rem] transition-[0.15s] ' +
                (locked ? 'cursor-default ' : 'cursor-pointer ') +
                cls
              }
            >
              <span className="flex h-[23px] w-[23px] flex-shrink-0 items-center justify-center rounded-full bg-border text-[0.72rem] font-extrabold">
                {LETTERS[i]}
              </span>
              {opt}
            </div>
          )
        })}
      </div>

      <Actions onCheck={check} onReset={reset} />
      {feedback && <Feedback {...feedback} />}
    </>
  )
}

export function Actions({ onCheck, onReset }) {
  return (
    <div className="mt-[13px] flex flex-wrap gap-2">
      <button
        onClick={onCheck}
        className="rounded-[9px] bg-blue px-[18px] py-2 text-[0.83rem] font-bold text-white transition-[0.18s] hover:opacity-[0.88]"
      >
        Vérifier
      </button>
      <button
        onClick={onReset}
        className="rounded-[9px] border-[1.5px] border-border bg-transparent px-[18px] py-2 text-[0.83rem] font-bold text-muted transition-[0.18s] hover:border-muted hover:text-text"
      >
        Effacer
      </button>
    </div>
  )
}
