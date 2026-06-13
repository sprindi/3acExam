import { Link } from 'react-router-dom'
import { lecons, leconOrder } from '../../data/lecons'
import { ACCENT } from './accent'
import LessonNav from './LessonNav'
import Reveal from './Reveal'

export default function LessonsHome() {
  return (
    <>
      <LessonNav />

      <main className="mx-auto max-w-wrap px-4 pb-12 pt-7">
        <Reveal>
          <div className="mb-7 text-center">
            <div className="text-[2rem]">📖</div>
            <h1 className="title-gradient mt-1.5 text-[clamp(1.4rem,5vw,2rem)] font-extrabold tracking-[-0.5px]">
              Les leçons — Semestre 2
            </h1>
            <p className="mx-auto mt-2 max-w-[34rem] text-[0.9rem] text-soft">
              Choisis un chapitre. Pour chaque notion : une explication simple, un schéma
              illustré, et le point-clé « à retenir » pour l’examen. 💪
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {leconOrder.map((id, i) => {
            const c = lecons[id]
            const a = ACCENT[c.accent]
            return (
              <Reveal key={id} delay={i * 0.08}>
                <Link
                  to={'/lecons/' + id}
                  className={
                    'flex h-full flex-col rounded-2xl border bg-gradient-to-br p-5 transition-transform hover:-translate-y-0.5 ' +
                    a.gradient
                  }
                >
                  <div className="text-[2.2rem]">{c.icon}</div>
                  <h2 className="mt-2 text-[1.05rem] font-extrabold">
                    Chapitre {i + 1}
                    {c.star && <span className="ml-1">⭐</span>}
                  </h2>
                  <p className={'text-[0.95rem] font-extrabold ' + a.text}>{c.title}</p>
                  <p className="mt-1.5 flex-1 text-[0.8rem] text-soft">{c.subtitle}</p>
                  <span className={'mt-3 text-[0.8rem] font-bold ' + a.text}>
                    {c.notions.length} notions · Lire la leçon →
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <Link
            to="/exercices"
            className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-green/30 bg-green/[0.08] px-4 py-3 text-[0.9rem] font-bold text-green transition-colors hover:bg-green/[0.14]"
          >
            ✏️ Aller au site d’exercices (s’entraîner)
          </Link>
        </Reveal>

        <footer className="mt-8 border-t border-border py-6 text-center text-[0.78rem] text-muted">
          📚 SVT 3AC — Semestre 2 · Système nerveux · Système musculaire · Immunité
        </footer>
      </main>
    </>
  )
}
