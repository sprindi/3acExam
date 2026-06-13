import { useState } from 'react'
import { useScore } from '../hooks/useScore'
import Feedback from './Feedback'
import { Actions } from './QCM'

export default function TrueFalse({ ex }) {
  const { results, setResult, clearResult } = useScore()
  const locked = ex.id in results
  const [picks, setPicks] = useState({}) // { rowIndex: 'V' | 'F' }
  const [feedback, setFeedback] = useState(null)

  function pick(rowIdx, val) {
    if (locked) return
    setPicks((prev) => ({ ...prev, [rowIdx]: val }))
  }

  function check() {
    if (locked) return
    for (let i = 0; i < ex.answers.length; i++) {
      if (!picks[i]) {
        setFeedback({ tone: 'warn', html: '⚠️ Réponds à toutes les phrases.' })
        return
      }
    }
    let all = true
    let html = ''
    ex.answers.forEach((cor, i) => {
      if (picks[i] !== cor) all = false
      html += `<div style="margin-top:5px"><b>${i + 1}.</b> ${ex.explanations[i]}</div>`
    })
    setResult(ex.id, all ? 'correct' : 'wrong')
    setFeedback({
      tone: all ? 'good' : 'bad',
      html: (all ? '✅ Tout juste !' : '❌ Quelques erreurs. Corrections :') + html,
    })
  }

  function reset() {
    setPicks({})
    setFeedback(null)
    clearResult(ex.id)
  }

  return (
    <>
      <div className="mt-3">
        {ex.statements.map((txt, i) => {
          const cor = ex.answers[i]
          return (
            <div
              key={i}
              className="mb-[9px] flex flex-wrap items-center gap-[10px]"
            >
              <div className="min-w-[200px] flex-1 text-[0.87rem]">
                {i + 1}. {txt}
              </div>
              <div className="flex gap-[6px]">
                {['V', 'F'].map((val) => {
                  const label = val === 'V' ? 'Vrai' : 'Faux'
                  let cls =
                    'border-border bg-surface text-muted hover:border-blue hover:text-blue'
                  if (locked) {
                    // après vérif : montrer la bonne / la mauvaise
                    if (val === cor)
                      cls =
                        'border-green bg-green/[0.18] text-green'
                    else cls = 'border-red bg-red/10 text-red'
                  } else if (picks[i] === val) {
                    cls =
                      val === 'V'
                        ? 'border-green bg-green/[0.12] text-green'
                        : 'border-red bg-red/[0.12] text-red'
                  }
                  return (
                    <button
                      key={val}
                      onClick={() => pick(i, val)}
                      disabled={locked}
                      className={
                        'rounded-[8px] border-[1.5px] px-[15px] py-[6px] text-[0.8rem] font-bold transition-[0.15s] ' +
                        (locked ? 'cursor-default ' : 'cursor-pointer ') +
                        cls
                      }
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <Actions onCheck={check} onReset={reset} />
      {feedback && <Feedback {...feedback} />}
    </>
  )
}
