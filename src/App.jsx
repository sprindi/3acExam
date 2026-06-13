import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from './components/Header'
import Tabs from './components/Tabs'
import ProgressBar from './components/ProgressBar'
import ScoreBar from './components/ScoreBar'
import ChapterSection from './components/ChapterSection'
import { chapters } from './data/resumes'

const CHAPTER_IDS = chapters.map((c) => c.id)

export default function App() {
  const [searchParams] = useSearchParams()
  // ?chap=<chapitre> vient du bouton « S'entraîner sur ce chapitre » des leçons.
  const chap = searchParams.get('chap')
  const initialTab = CHAPTER_IDS.includes(chap) ? chap : 'all'
  const [tab, setTab] = useState(initialTab)

  function changeTab(id) {
    setTab(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // À l'arrivée avec ?chap=… : sélectionne l'onglet du chapitre et scrolle dessus.
  useEffect(() => {
    if (!CHAPTER_IDS.includes(chap)) return
    setTab(chap)
    requestAnimationFrame(() => {
      document.getElementById('chap-' + chap)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [chap])

  const visible = chapters.filter((c) => tab === 'all' || tab === c.id)

  return (
    <>
      <Header />
      <Tabs active={tab} onChange={changeTab} />

      <div className="mx-auto max-w-wrap px-4 pb-10 pt-[22px]">
        <Link
          to="/lecons"
          className="mb-[18px] flex items-center justify-center gap-2 rounded-[14px] border border-blue/30 bg-blue/[0.08] px-4 py-3 text-[0.9rem] font-bold text-blue transition-colors hover:bg-blue/[0.14]"
        >
          📖 Pas encore prêt ? Lis d’abord les leçons illustrées
        </Link>

        <ProgressBar />

        <div className="mb-[26px] rounded-[14px] border border-border bg-card px-[18px] py-4 text-[0.9rem] text-soft [&_b]:text-green">
          👋 Salut ! Pour chaque chapitre : lis d'abord le <b>résumé simple</b>, puis fais
          les <b>exercices</b> (du plus facile au plus difficile). Tous les exercices
          viennent des <b>vrais examens régionaux</b> (Casablanca, Rabat, Tanger, Fès,
          Oriental — 2019 à 2025). Clique sur un exercice pour l'ouvrir. Bon courage ! 💪
        </div>

        {visible.map((c) => (
          <ChapterSection key={c.id} chapter={c} />
        ))}

        <footer className="mt-[14px] border-t border-border px-4 py-[22px] text-center text-[0.78rem] text-muted">
          📚 Bon courage pour l'examen régional ! · Exercices basés sur les vrais examens
          de Casablanca, Rabat, Tanger, Fès &amp; Oriental (2019–2025). · Le Semestre 1 sera
          ajouté bientôt.
        </footer>
      </div>

      <ScoreBar />
    </>
  )
}
