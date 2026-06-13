import { createContext, useCallback, useContext, useMemo, useState } from 'react'

// Score global partagé en mémoire React (aucune persistance, comme l'original).
// `results` : { [exerciseId]: 'correct' | 'wrong' }

const ScoreContext = createContext(null)

export function ScoreProvider({ children }) {
  const [results, setResults] = useState({})

  // Enregistre (ou met à jour) le résultat d'un exercice
  const setResult = useCallback((id, status) => {
    setResults((prev) => {
      if (prev[id] === status) return prev
      return { ...prev, [id]: status }
    })
  }, [])

  // Réinitialise un exercice (bouton "Effacer")
  const clearResult = useCallback((id) => {
    setResults((prev) => {
      if (!(id in prev)) return prev
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const counts = useMemo(() => {
    let correct = 0
    let wrong = 0
    for (const status of Object.values(results)) {
      if (status === 'correct') correct++
      else if (status === 'wrong') wrong++
    }
    return { correct, wrong, done: correct + wrong }
  }, [results])

  const value = useMemo(
    () => ({ results, setResult, clearResult, counts }),
    [results, setResult, clearResult, counts]
  )

  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
}

export function useScore() {
  const ctx = useContext(ScoreContext)
  if (!ctx) throw new Error('useScore must be used within a ScoreProvider')
  return ctx
}
