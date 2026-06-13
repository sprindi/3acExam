import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Fait avancer un index d'étape 0..count-1 sur un timer (animation « une étape à
// la fois »). En mode prefers-reduced-motion : pas d'avance auto, on montre la
// dernière étape et l'élève navigue à la main.
export function useSteps(count, { interval = 1500, loop = true } = {}) {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(reduce ? count - 1 : 0)
  const [playing, setPlaying] = useState(!reduce)
  const timer = useRef(null)

  useEffect(() => {
    if (!playing || reduce) return undefined
    timer.current = setInterval(() => {
      setStep((s) => (s + 1 >= count ? (loop ? 0 : s) : s + 1))
    }, interval)
    return () => clearInterval(timer.current)
  }, [playing, reduce, count, interval, loop])

  return {
    step,
    playing,
    reduce,
    setStep,
    toggle: () => setPlaying((p) => !p),
    replay: () => {
      setStep(0)
      setPlaying(true)
    },
  }
}
