import { useState } from 'react'
import { useScore } from '../hooks/useScore'
import Feedback from './Feedback'
import { Actions } from './QCM'

export default function Matching({ ex }) {
  const { results, setResult, clearResult } = useScore()
  const locked = ex.id in results
  const [values, setValues] = useState({}) // { rowIndex: optionText }
  const [feedback, setFeedback] = useState(null)

  function setValue(rowIdx, val) {
    if (locked) return
    setValues((prev) => ({ ...prev, [rowIdx]: val }))
  }

  function check() {
    if (locked) return
    for (let i = 0; i < ex.pairs.length; i++) {
      if (!values[i]) {
        setFeedback({ tone: 'warn', html: '⚠️ Complète toutes les lignes.' })
        return
      }
    }
    let all = true
    ex.pairs.forEach((pair, i) => {
      if (values[i] !== pair.correct) all = false
    })
    setResult(ex.id, all ? 'correct' : 'wrong')
    setFeedback({
      tone: all ? 'good' : 'bad',
      html: (all ? '✅ Parfait ! ' : '❌ Pas tout juste. ') + ex.explanation,
    })
  }

  function reset() {
    setValues({})
    setFeedback(null)
    clearResult(ex.id)
  }

  return (
    <>
      <div className="my-3">
        {ex.pairs.map((pair, i) => {
          const val = values[i] || ''
          let selCls = 'border-border'
          if (locked) {
            selCls =
              val === pair.correct
                ? 'border-green bg-green/[0.08]'
                : 'border-red bg-red/[0.08]'
          }
          return (
            <div key={i} className="mb-2 flex flex-wrap items-center gap-[10px]">
              <div className="min-w-[160px] rounded-[8px] border border-border bg-surface px-[13px] py-2 text-[0.84rem] font-semibold">
                {pair.label}
              </div>
              <select
                value={val}
                disabled={locked}
                onChange={(e) => setValue(i, e.target.value)}
                className={
                  'min-w-[190px] flex-1 cursor-pointer rounded-[8px] border-[1.5px] bg-surface px-[11px] py-2 text-[0.84rem] text-text focus:border-blue focus:outline-none ' +
                  selCls
                }
              >
                <option value="">-- choisir --</option>
                {ex.options.map((opt, j) => (
                  <option key={j} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>

      <Actions onCheck={check} onReset={reset} />
      {feedback && <Feedback {...feedback} />}
    </>
  )
}
