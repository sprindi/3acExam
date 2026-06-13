import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { lecons, leconOrder } from '../../data/lecons'
import { ACCENT } from './accent'
import LessonNav from './LessonNav'
import Reveal from './Reveal'
import Toc from './Toc'
import Notion from './Notion'
import DifficultWords from './DifficultWords'
import VideoLesson from './VideoLesson'
import ReadingProgress from './ReadingProgress'

export default function LessonPage() {
  const { chapitre } = useParams()
  const lecon = lecons[chapitre]
  const firstId = lecon?.notions[0]?.id

  // Accordion : la 1ère notion ouverte par défaut. `read` = notions déjà ouvertes.
  const [open, setOpen] = useState(() => (firstId ? { [firstId]: true } : {}))
  const [read, setRead] = useState(() => (firstId ? new Set([firstId]) : new Set()))

  // Réinitialise l'état quand on change de chapitre + remonte en haut.
  useEffect(() => {
    window.scrollTo({ top: 0 })
    setOpen(firstId ? { [firstId]: true } : {})
    setRead(firstId ? new Set([firstId]) : new Set())
  }, [chapitre, firstId])

  if (!lecon) return <Navigate to="/lecons" replace />

  const a = ACCENT[lecon.accent]
  const num = leconOrder.indexOf(chapitre) + 1

  function toggle(id) {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }))
    setRead((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }

  // Depuis le sommaire : ouvrir la notion (et la marquer lue).
  function selectFromToc(id) {
    setOpen((prev) => ({ ...prev, [id]: true }))
    setRead((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }

  return (
    <>
      <LessonNav />

      <main className="mx-auto max-w-[1100px] px-4 pb-12 pt-6">
        {/* En-tête du chapitre */}
        <Reveal>
          <header
            className={
              'mb-6 flex items-center gap-4 rounded-2xl border bg-gradient-to-br px-5 py-5 ' + a.gradient
            }
          >
            <div className="text-[2.6rem]">{lecon.icon}</div>
            <div>
              <p className={'text-[0.78rem] font-extrabold uppercase tracking-[1px] ' + a.text}>
                Chapitre {num}
              </p>
              <h1 className="text-[1.3rem] font-extrabold leading-tight sm:text-[1.5rem]">
                {lecon.title}
                {lecon.star && <span className="ml-1">⭐</span>}
              </h1>
              <p className="mt-1 text-[0.86rem] text-soft">{lecon.intro}</p>
            </div>
          </header>
        </Reveal>

        {/* Vidéo explicative du chapitre (lazy, youtube-nocookie) */}
        <VideoLesson chapitre={chapitre} accentKey={lecon.accent} />

        <div className="lg:grid lg:grid-cols-[230px_1fr] lg:gap-6">
          {/* Sommaire */}
          <aside className="mb-5 lg:mb-0">
            <Toc notions={lecon.notions} accentKey={lecon.accent} onSelect={selectFromToc} />
          </aside>

          {/* Contenu */}
          <div>
            <ReadingProgress read={read.size} total={lecon.notions.length} accentKey={lecon.accent} />

            {lecon.notions.map((n) => (
              <Notion
                key={n.id}
                notion={n}
                accentKey={lecon.accent}
                isOpen={!!open[n.id]}
                onToggle={() => toggle(n.id)}
              />
            ))}

            <DifficultWords words={lecon.words} accentKey={lecon.accent} />

            {/* Pied de page : s'entraîner */}
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-5 text-center">
                <p className="text-[0.9rem] text-soft">
                  Tu as lu la leçon ? Maintenant, teste-toi avec des exercices des vrais
                  examens régionaux !
                </p>
                <Link
                  to={'/exercices?chap=' + chapitre}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-[0.9rem] font-extrabold text-bg transition-transform hover:-translate-y-0.5"
                >
                  ➡️ S’entraîner sur ce chapitre
                </Link>
              </div>
            </Reveal>

            {/* Navigation entre chapitres */}
            <nav className="mt-5 flex items-center justify-between gap-3 text-[0.84rem] font-bold">
              {num > 1 ? (
                <Link to={'/lecons/' + leconOrder[num - 2]} className="text-muted hover:text-text">
                  ← {lecons[leconOrder[num - 2]].title}
                </Link>
              ) : (
                <span />
              )}
              {num < leconOrder.length ? (
                <Link to={'/lecons/' + leconOrder[num]} className={a.text + ' text-right'}>
                  {lecons[leconOrder[num]].title} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </div>
        </div>
      </main>
    </>
  )
}
